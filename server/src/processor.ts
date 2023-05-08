import axios from "axios";
import { DoneCallback, Job } from "bull";
import { Processor } from "bullmq";
import { getMaxItemId } from "./api.listener";
import { AppConfig } from "./config";
import { engagespot } from "./engagespot";
import { logger } from "./logger";
import { queue } from "./queue";
import { redis } from "./redis";

export const processor = async (job: any) => {

    logger('processor started');

    if(job.data.name === 'hn_api_listener'){

        getMaxItemId().then(async (maxItemId) => {

            logger('latest maxItemId received as '+maxItemId);

            const lastMaxId = await redis.get('lastMaxId') as unknown as number ||(maxItemId-1);
            logger('looping back till '+lastMaxId);

            for(let i=maxItemId; i>lastMaxId; i--){
                logger("Pushing to fetch_and_notify with id "+i);
                await queue.add('fetch_and_notify',{
                    name:'fetch_and_notify',
                    id:i
                  },{
                    removeOnComplete: true
                  });
            }

            await redis.set('lastMaxId',maxItemId);
            return Promise.resolve(true);
        }).catch((error) => {
            return Promise.reject(error);
        })
    }

    if(job.data.name === 'fetch_and_notify'){

        logger('fetch_and_notify job received for id '+job.data.id);
        axios.get(AppConfig.HN_API_FETCH_ITEM_URL+job.data.id+'.json').then((response) => {
            
            if(response.data.type != 'comment'){
                return Promise.resolve(true);
            }

            const commentBy = response.data.by;
            const commentText = response.data.text;

            //Find it's parent
            axios.get(AppConfig.HN_API_FETCH_ITEM_URL+response.data.parent+'.json').then(async (response) => {
                const to = response.data.by;
                const id = response.data.id;
                const type = response.data.type;
                const title = response.data.title;

                let users: string[] | null = await redis.lrange('users',0,-1);

                //Send notification only if they're using our extension
                if(users.indexOf(to) > -1 && (to != commentBy)){
                    users = null;
                    //Notify this user.
                    const notificationTitle = '<strong>'+commentBy+'</strong> replied to your '+type
                    const notificationBody = commentText;

                    logger(notificationTitle);
                    await engagespot.send(to,8520, {
                        user: commentBy,
                        comment: commentText,
                        storyTitle: title.slice(0,15)+'...',
                        url: 'https://news.ycombinator.com/item?id='+id
                    });
                    return Promise.resolve(true);
                }else{
                    logger("user not in list "+to);
                    return Promise.resolve(true);
                }
                
            }).catch((error) => {
                return Promise.reject(error);
            });

        }).catch((error) => {
            return Promise.reject(error);
        })
        
    }
}