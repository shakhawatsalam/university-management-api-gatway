import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

const redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (err) => logger.error('RedisError', err));
redisClient.on('connect', () => logger.info('Redis Connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
