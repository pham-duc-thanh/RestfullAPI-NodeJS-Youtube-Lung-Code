const db = require("../common/connect");

function Book(book) {
  this.id = book.id;
  this.name = book.name;
  this.image = book.image;
  this.author = book.author_id;
}

Book.get_all = (result) => {
  db.query("SELECT * FROM book", function (err, book) {
    if (err) {
      result(null);
    } else {
      result(book);
    }
  });
};

Book.getById = (id, result) => {
  db.query("SELECT * FROM book WHERE id = ?", id, function (err, book) {
    if (err || book.length == 0) {
      result(null);
    } else {
      result(book[0]);
    }
  });
};

Book.create = (data, result) => {
  db.query("INSERT INTO book SET ?", data, function (err, book) {
    if (err) {
      result(null);
    } else {
      result({ id: book.insertId, ...data });
    }
  });
};

Book.delete = (id, result) => {
  db.query("DELETE FROM book WHERE id = ?", id, function (err, book) {
    if (err) {
      result(null);
    } else {
      result("Xoá dữ liệu có id " + id + " thành công!");
    }
  });
};

Book.update = (data, result) => {
  console.log("data...", data);
  db.query(
    "UPDATE book SET name = ?, image = ?, author_id = ? WHERE id = ?",
    [data.name, data.image, data.author_id, data.id], // Chỉnh sửa tên của trường và thêm data.id
    function (err, book) {
      console.log("err...", err); // Sửa tên biến lỗi
      if (err) {
        result(null);
      } else {
        result(data); // Trả về dữ liệu đã cập nhật thành công
      }
    }
  );
};

module.exports = Book;
