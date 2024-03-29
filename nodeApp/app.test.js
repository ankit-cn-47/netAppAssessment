import request from 'supertest';
import server from './app';
// import afterAll from "ts-jest;
// import { describe, it, expect, afterAll } from 'ts-jest';


describe('GET /', () => {
  it('responds with HTML containing "Hello Netapp"', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toContain('text/html');
    expect(response.text).toContain('<h1>Hello Netapp</h1>');
  });
});

afterAll(async () => {
  // Close the server after all tests are complete
  server.close();
});

