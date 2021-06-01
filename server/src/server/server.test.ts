import supertest from 'supertest';
import server from '@src/server/server';

let request: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
  request = supertest(server);
});

test('Test Server Connects', async () => {
  const res = await request.get('/status');
  expect(res.status).toEqual(200);
});
