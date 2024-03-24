var express = require("express");
var app = express();

require('./app/routers/home.router')(app);
require('./app/routers/book.router')(app);



app.listen(3000, () => {
    console.log("Server listening http://localhost:3000");
});