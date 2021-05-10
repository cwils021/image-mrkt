/* eslint-disable no-process-env */
import mongoose from 'mongoose';
import dotenv from 'dotenv-safe';
import server from '@src/server/server';

dotenv.config();

const DB_URL = `${process.env.TESTDB}`;
let listener: any;
describe('Testing server connections', () => {
  beforeAll(async () => {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    listener = server.listen(process.env.PORT, () => {});
  });

  it('Tests server is running on PORT 5000', () => {
    const port: number = listener.address().port;
    expect(port).toBe(5000);
  });

  it('Test Connection to DB is successfull', () => {
    expect(mongoose.connection.readyState).toBe(1);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
