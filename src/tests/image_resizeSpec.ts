import app from '../index';
import supertest from 'supertest';

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
  it('should return a cached image if the resized image already exists', () => {
    request.get('/resize?filename=fjord&height=300&width=250').expect(304);
  });
});
