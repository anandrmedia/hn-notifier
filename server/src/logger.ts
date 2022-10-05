import { AppConfig } from "./config"

export const logger = (message: string) => {
    if(AppConfig.DEBUG == 1){ 
        console.log(message)
    }
}