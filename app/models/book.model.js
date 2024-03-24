function Book (book) {
    this.id = book.id;
    this.name = book.name;
}


Book.get_all = (result) => {
    var data = [
        {
          id: 1,
          name: "book name 1",
        },
        {
          id: 2,
          name: "book name 2",
        },
        {
          id: 3,
          name: "book name 3",
        },
        {
          id: 4,
          name: "book name 4",
        },
      ];

      result(data);
}

Book.getById = (id) => {
    var data = {id: id, name: "book name 1"}
    return data;
};

module.exports =  Book;