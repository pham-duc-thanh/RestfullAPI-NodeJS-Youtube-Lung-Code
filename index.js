var express = require("express");
var app = express();

app.get("/" , (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get("/json" , (req, res) => {
    var data  = [
        {
            id: 1,
            name: "Thanh"
        },
        {
            id: 2,
            name: "Xinh"
        },
        {
            id: 3,
            name: "Hậu"
        },
        {
            id: 4,
            name: "Nhất"
        },
    ];
    
    res.send({persons: data})
});


app.listen(3000, () => {
    console.log("Server listening http://localhost:3000");
});