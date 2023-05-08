import axios from "axios"
import { AppConfig } from "./config"
import { logger } from "./logger";

export const engagespot = {
    send: async (recipient: string, templateId: number, data: any) =>{
        axios.post('https://api.engagespot.co/v3/notifications',{
            notification: {
                templateId: templateId
            },
            "recipients": [
                recipient
            ],
            data
        },{
            headers:{
                'X-ENGAGESPOT-API-KEY': AppConfig.ENGAGESPOT_API_KEY,
                'X-ENGAGESPOT-API-SECRET': AppConfig.ENGAGESPOT_API_SECRET
            }
        }).then((response) => {
            return true;
            //logger(response.data)
        }).catch((error) => {
            logger(error.response);
        })
    }
}