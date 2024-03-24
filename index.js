var http = require("http");

var server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")  // mặc định là html
    // res.setHeader("Content-Type", "text/plain");
    // res.setHeader("Content-Type", "application/json"); // viết API dùng nhiều hơn
    res.end("<h1>Hello NodeJS + MySQL</h1>")
});

server.listen(8080, () => {
    console.log("Server listening http://localhost:8080");
});