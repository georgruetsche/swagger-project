const should = require('should');
const request = require('supertest');
const server = require('../../../app');

describe('controllers', () => {
  describe('books', () => {
    describe('GET /books', () => {
      it('should return all books as array', (done) => {
        request(server)
          .get('/books')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((error, response) => {
            should.not.exist(error);
            response.body.should.be.an.Array();
            done();
          });
      });
    });
    describe('GET /books/:id', () => {
      it('should return the book for a given id', (done) => {
        const expectedBook = {
          id: '9780201485677',
          title: 'Refactoring: Improving the Design of Existing Code',
          author: 'Martin Fowler',
          pages: 431,
          year: 1999
        }
        request(server)
          .get(`/books/${expectedBook.id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((error, response) => {
            should.not.exist(error);
            response.body.id.should.be.equal(expectedBook.id);
            response.body.title.should.be.equal(expectedBook.title);
            response.body.author.should.be.equal(expectedBook.author);
            response.body.pages.should.be.equal(expectedBook.pages);
            response.body.year.should.be.equal(expectedBook.year);
            done();
          });
      });
      /* Hier weitere Tests */
    });
  });
});