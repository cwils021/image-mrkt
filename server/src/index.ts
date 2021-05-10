/* eslint-disable no-process-env */
// import server from '@src/server/server';
import dotenv from 'dotenv-safe';

dotenv.config();

const DB_URL = `${process.env.TEST_DB}`;

console.log(DB_URL);
console.log(process.env.TEST_DB);
