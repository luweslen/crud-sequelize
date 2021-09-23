import dotenv from 'dotenv';

dotenv.config();

const environment = process.env;

export const { NODE_ENV } = environment;

export const PORT = environment.PORT || 3000;

export const { DATABASE_URL } = environment;
