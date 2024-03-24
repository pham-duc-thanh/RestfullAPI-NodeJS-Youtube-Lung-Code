var Book = require('../models/book.model');

// exports.get_list = (req, res) => {
//   Book.get_all((data) => {
//       res.send({ result: data });
//   });
  
// };

// exports.detail = (req, res) => {
//   var data = Book.getById(res.params.id);
//   res.send({ result: data });
// };

exports.get_list = (req, res) => {
    Book.get_all((data) => {
        if (data) {
            res.send({ result: data });
        } else {
            res.status(500).send({ message: "Error occurred while fetching book list" });
        }
    });
};

exports.detail = (req, res) => {
    var data = Book.getById(req.params.id);
    if (data) {
        res.send({ result: data });
    } else {
        res.status(404).send({ message: "Book not found" });
    }
};
