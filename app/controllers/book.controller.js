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
    Book.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
};

// body-parser 
exports.add_book = function(req, res) {
    var data = req.body;

    Book.create(data, function (response) {
        res.send({ result: response });
    })
}

exports.delete_book = (req, res) => {
    var id = req.params.id;
    Book.delete(id, (response) => {
        res.send({ result: response });
    })
}

exports.update_book = (req, res) => {
    var data = req.body;

    Book.update(data, function (response) {
        res.send({ result: response });
    })
}
