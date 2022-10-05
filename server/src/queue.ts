import { Queue, Worker } from "bullmq";
import path from "path";
import { AppConfig } from "./config";

//Start the Queue
export const queue = new Queue('hn_worker_queue', {
    connection:{
      host: AppConfig.REDIS_HOST,
      port: AppConfig.REDIS_PORT
    }
  });

queue.drain();

const processorFile = path.join(__dirname, 'processor.js');

export  const worker = new Worker('hn_worker_queue',processorFile,  {
    connection:{
      host: AppConfig.REDIS_HOST,
      port: AppConfig.REDIS_PORT
    }
  } );