import app from '../index';
import supertest from 'supertest';
import { unlinkSync } from 'fs';
import path from 'path';

const request = supertest(app);

describe('Testing resize endpoint', () => {
  it('should return an error if the user did not enter the width', () => {
    request.get('/resize?filename=fjord&height=300').expect(400);
  });
  it('should return an error if the user did not enter the height', () => {
    request.get('/resize?filename=fjord&width=200').expect(400);
  });
  it('should return an error if the user did not enter the filename', () => {
    request.get('/resize?width=200&height=300').expect(400);
  });
  it('should return the resized image', () => {
    request.get('/resize?filename=fjord&height=300&width=250').expect(200);
  });
  it('should return an error if the file does not exist', () => {
    request.get('/resize?filename=fjorddd&height=300').expect(404);
  });
  it('should return a cached image if the it', () => {
    request.get('/resize?filename=fjord&height=300&width=250').expect(304);
  });
  afterAll(() => {
    path.join(__dirname, '../../assets/thumb', 'fjord250_300.jpg');
  });
});
