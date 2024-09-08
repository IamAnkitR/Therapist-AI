import app from './app';
import dotenv from 'dotenv';
import { PORT } from './config';
import { PrismaClient } from '@prisma/client';
import logger from './utils/logger';

dotenv.config();

const prisma = new PrismaClient();

(async () => {
  try {
    await prisma.$connect();
    logger.info('Connected to PostgreSQL Database');

    app.listen(PORT, () => {
      logger.info(`Server started at port ${PORT}`);
    });
  } catch (error) {
    logger.error('Error connecting to PostgreSQL:', error);
    process.exit(1);
  }
})();

process.on('SIGINT', async () => {
  logger.info(
    'SIGINT signal received: closing PostgreSQL connection and shutting down server.',
  );
  await prisma.$disconnect();
  process.exit(0);
});
