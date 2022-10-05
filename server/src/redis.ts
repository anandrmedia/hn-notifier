import Redis from "ioredis";
import { AppConfig } from "./config";
export const redis = new Redis(AppConfig.REDIS_PORT, AppConfig.REDIS_HOST)