import supertest from 'supertest';
import server from '@src/server/server';

const request = supertest(server);
describe('Testing Server GET Routes', () => {
  it('GET /home', async () => {
    const response = await request.get('/home');
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
