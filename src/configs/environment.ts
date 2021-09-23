import dotenv from 'dotenv';

dotenv.config();

const environment = process.env;

export const { NODE_ENV } = environment;

export const PORT = environment.PORT || 3000;

export const { DATABASE_HOST } = environment;
export const { DATABASE_PORT } = environment;
export const { DATABASE_NAME } = environment;
export const { DATABASE_USER } = environment;
export const { DATABASE_PASS } = environment;
