import axios from "axios"
import { AppConfig } from "./config"

export const getMaxItemId = () => {
    return axios.get(AppConfig.HN_API_MAX_ITEM_URL).then((response) => {
        return response.data as number
    }).catch((error) => {
       throw error as Error
    })
}