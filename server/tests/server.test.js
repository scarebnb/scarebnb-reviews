const request = require('supertest');
const app = require('./testApp.js');
const db = require('../db');
const { getRand } = require('../seed/helpers.js');

describe('Test server routes and responses', () => {
  test('should respond to GET request based on random id', () => {
    return request(app)
    .get(`/reviews/${getRand(1,100)}`)
    .then(response => {
      expect(response.statusCode).toBe(200);
    });
  });

  test('body should have all keys', () => {
    return request(app)
    .get(`/reviews/${getRand(1,100)}`)
    .then(response => {
      let keys = Object.keys(response.body);

      expect(keys[0]).toBe('location_id');
      expect(keys[1]).toBe('address');
      expect(keys[2]).toBe('reviews');
    });
  });

  test('reviews key should be of type array', () => {
    return request(app)
    .get(`/reviews/${getRand(1,100)}`)
    .then(response => {
      expect(Array.isArray(response.body.reviews)).toBe(true);
    });
  });

  test('reviews should have all corrects keys',() =>  {
    return request(app)
    .get(`/reviews/${getRand(1,100)}`)
    .then(response => {
      const keys = Object.keys(response.body.reviews[getRand(1, 10)]);

      expect(keys.indexOf('review_id')).not.toBe(-1);
      expect(keys.indexOf('reviewer_name')).not.toBe(-1);
      expect(keys.indexOf('date')).not.toBe(-1);
      expect(keys.indexOf('review')).not.toBe(-1);
      expect(keys.indexOf('cleanliness')).not.toBe(-1);
      expect(keys.indexOf('accuracy')).not.toBe(-1);
      expect(keys.indexOf('comm')).not.toBe(-1);
      expect(keys.indexOf('check_in')).not.toBe(-1);
      expect(keys.indexOf('value')).not.toBe(-1);
      expect(keys.indexOf('tags')).not.toBe(-1);
    });
  });

  test('reviews avatar should be valid URL', () => {
    return request(app)
    .get(`/reviews/${getRand(1,100)}`)
    .then(response => {
      let url = new URL(response.body.reviews[getRand(1,10)].avatar);

      expect(url.protocol).toBe('https:');
    });
  });

  // close db connection that is started by server
  afterAll((done) => {
    db.end(done);
  });
});