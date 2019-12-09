const request = require('supertest');
const app = require('../lib/app');

describe('do your paths work?', () => {

  it(' / returns hi and 200 code', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it(' /echo return res.body', () => {
    return request(app)
      .post('/echo')
      .send({
        name: 'JBJ'
      })
      .then(res => {
        expect(res.text).toEqual('{"name":"JBJ"}');
      });
  });

  it(' /blue returns blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });

  it(' /blue returns green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });

  it(' /blue returns red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });
});
