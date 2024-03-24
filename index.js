var express = require("express");
var app = express();

/**
 *  Cấu hình body parser
 */
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


require('./app/routers/home.router')(app);
require('./app/routers/book.router')(app);

app.listen(3000, () => {
    console.log("Server listening http://localhost:3000");
});