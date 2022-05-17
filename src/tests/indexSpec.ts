import app from '../index';
import supertest from 'supertest';

const request = supertest(app);
describe('Tests for root endpoint', () => {
  it('should return a status code 200', () => {
    request.get('/').expect(200);
  });
});
