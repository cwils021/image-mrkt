/* eslint-disable no-process-env */
import mongoose from 'mongoose';
import dotenv from 'dotenv-safe';
import supertest from 'supertest';
import server from '@src/server/server';
import Users from '@src/models/users';

dotenv.config();
const DB_URL = String(process.env.TEST_DB);
const Request = supertest(server);

describe('Testing User Model', () => {
  beforeAll(async () => {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  });

  // test('Testing User is added to DB', async (done) => {
  //   const user = new Users({fn: 'chris', age: 27});
  //   await user.save();
  //   const searchUser = await Users.findOne({fn: 'chris'});
  //   expect(searchUser.fn).toBe('chris');
  //   expect(searchUser.age).toBe(27);
  //   done();
  // });

  afterEach(async (done) => {
    await Users.deleteMany();
    done();
  });
  afterAll(async (done) => {
    await mongoose.connection.close();
    done();
  });
});
