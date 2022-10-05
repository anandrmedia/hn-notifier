import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '.env') });

interface AppConfig{
    DEBUG: boolean
    APP_PORT : number
    REDIS_HOST: string
    REDIS_PORT: number
    REDIS_PASSWORD: string
    HN_API_MAX_ITEM_URL: string
    HN_API_FETCH_ITEM_URL: string
    ENGAGESPOT_API_KEY: string
    ENGAGESPOT_API_SECRET: string
}

export const AppConfig: AppConfig = {
    DEBUG: process.env.DEBUG as unknown as boolean || false,
    APP_PORT : process.env.APP_PORT as unknown as number || 3000,
    REDIS_HOST : process.env.REDIS_HOST || '127.0.0.1',
    REDIS_PORT : process.env.REDIS_PORT as unknown as number || 6379,
    REDIS_PASSWORD : process.env.REDIS_PASSWORD || '',
    HN_API_MAX_ITEM_URL : 'https://hacker-news.firebaseio.com/v0/maxitem.json',
    HN_API_FETCH_ITEM_URL : 'https://hacker-news.firebaseio.com/v0/item/',
    ENGAGESPOT_API_KEY: process.env.ENGAGESPOT_API_KEY as unknown as string,
    ENGAGESPOT_API_SECRET: process.env.ENGAGESPOT_API_SECRET as unknown as string
}

