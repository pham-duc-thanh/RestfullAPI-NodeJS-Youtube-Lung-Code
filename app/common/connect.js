const mysql = require("mysql");

const connection = mysql.createConnection({
    // host: "localhost",
    host: "localhost",
    port: 3307,
    user: "root",
    password: "",
    database: "demo_node_api"
});

connection.connect((err, connection) => {
    if (err) {
        console.error('Lỗi kết nối:', err.stack);
        return;
    }
    console.log('Kết nối Cơ sở dữ liệu thành công!');
});

module.exports = connection;
