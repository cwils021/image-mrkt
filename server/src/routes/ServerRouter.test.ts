import supertest from 'supertest';
import server from '@src/server/server';

let request: supertest.SuperTest<supertest.Test>;
describe('Testing Server GET Routes', () => {
  beforeAll(async () => {
    request = supertest(server);
  });

  it('GET /:username/home', async () => {
    const response = await request.get('/:username/home');
    expect(response.status).toBe(200);
  });
  it('GET /account', async () => {
    const response = await request.get('/account');
    expect(response.status).toBe(200);
  });
  it('GET /marketplace', async () => {
    const response = await request.get('/marketplace');
    expect(response.status).toBe(200);
  });
});
