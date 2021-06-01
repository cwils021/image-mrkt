import supertest from 'supertest';
import server from '@src/server/server';

let request: supertest.SuperTest<supertest.Test>;
describe('Testing Server GET Routes', () => {
  beforeAll(async () => {
    request = supertest(server);
  });
  test('sanity check', () => {
    expect(2).toEqual(2);
  });
});
