import express, { Express, Request, Response } from 'express';
import { AppConfig } from './config';
import {Queue, Worker} from "bullmq"
import { logger } from './logger';
import path from 'path';
import { queue } from './queue';
import { redis } from './redis';
import cors from "cors"

const app: Express = express();
const port = AppConfig.APP_PORT;

  //Add HN API Listener which executes every 5 seconds.
  logger('Adding hn_api_listener to queue');
  queue.add('hn_api_listener',{
    name:'hn_api_listener',
  },{
    repeat:{
      every: 5000
    }
  });

  app.use(cors({
    origin: '*'
  }));
  app.use(express.json())

  //Initialize a default route for health checking
  app.get('/', (req: Request, res: Response) => {
    res.send('HN-Notify running');
  });

  //Initialize a default route for health checking
  app.post('/register', async (req: Request, res: Response) => {
    const users = await redis.lrange('users',0,-1);
    
    if(users.indexOf(req.body.username) != -1){
      res.status(200).send('ok');
    }else{
      await redis.rpush('users',req.body.username);
      res.status(200).send('ok');
    }

    res.status(200).send('ok');
  });

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
