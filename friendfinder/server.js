var express = require("express");
var path = require("path");

var app = express();
var PORT = 2500;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//possibility of adding content

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});



