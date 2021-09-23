import { Sequelize } from 'sequelize';
import {
  DATABASE_HOST, DATABASE_NAME, DATABASE_PASS, DATABASE_PORT, DATABASE_USER,
} from '@/configs/environment';

export const db = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASS,
  {
    dialect: 'mysql',
    host: DATABASE_HOST,
    port: Number(DATABASE_PORT),
  },
);
