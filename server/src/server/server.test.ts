/* eslint-disable no-process-env */
import mongoose from 'mongoose';
import dotenv from 'dotenv-safe';
import supertest from 'supertest';
import server from '@src/server/server';

dotenv.config();

const DB_URL = `${process.env.TEST_DB}`;
const request = supertest(server);

describe('Testing server connections', () => {
  beforeAll(async () => {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  });

  it('Tests server is running', async (done) => {
    const reponse = await request.get('/').expect(200);
    expect(reponse.status).toBe(200);
    done();
  });

  it('Test Connection to DB is successfull', () => {
    expect(mongoose.connection.readyState).toBe(1);
  });

  afterAll(async (done) => {
    await mongoose.connection.close();
    done();
  });
});
