import { AppConfig } from "./config"

export const logger = (message: string) => {
    AppConfig.DEBUG && console.log(message);
}