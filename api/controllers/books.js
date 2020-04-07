let BOOKS = new Map();
BOOKS.set(
  '9780201485677',
  {
    id: '9780201485677',
    title: 'Refactoring: Improving the Design of Existing Code',
    author: 'Martin Fowler',
    pages: 431,
    year: 1999
  }
);
BOOKS.set(
  '9780132350884',
  {
    id: '9780132350884',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    pages: 462,
    year: 2008
  }
);
BOOKS.set(
  '9780321356680',
  {
    id: '9780321356680',
    title: 'Effective Java',
    author: 'Joshua Bloch',
    pages: 368,
    year: 2008
  }
);

function books(request, response) {
  response.json(Array.from(BOOKS.values()));
}

function find(request, response) {
    const id = request.swagger.params.id.value;
    if(BOOKS.has(id)) {
      const book = BOOKS.get(id);
      response.json(book);
    } else {
      response.status(204).send();
    }
  }

  function save(request, response) {
    const book = request.body;
    BOOKS.set(book.id, book);
    response.json(
      {
        success: 1,
        description: 'Book saved',
      }
    );
  }

  module.exports = {
    books,
    find,
    save,
  };
