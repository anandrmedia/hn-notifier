import axios from "axios"
import { AppConfig } from "./config"

export const engagespot = {
    send: async (recipient: string, title: string, message: string, url: string, icon: string) =>{
        axios.post('https://api.engagespot.co/v3/notifications',{
            notification: {
                title: title,
                message:message,
                url:url,
                icon:icon
            },
            "recipients": [
                recipient
            ]
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