import mongoose from 'mongoose';
import dotenv from 'dotenv-safe';
import server from '@src/server/server';
import {User} from '@src/models/users';
import supertest from 'supertest';

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

  test('Testing User is added to DB', async (done) => {
    const user = new User({fn: 'chris', age: 27});
    await user.save();
    const searchUser = await User.findOne({fn: 'chris'});
    expect(searchUser.fn).toBe('chris');
    expect(searchUser.age).toBe(27);
    done();
  });

  afterEach(async (done) => {
    await User.deleteMany();
    done();
  });
  afterAll(async (done) => {
    await mongoose.connection.close();
    done();
  });
});
