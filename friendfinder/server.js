var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//possibility of adding content

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "friendfinder\app\public\home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "friendfinder\app\public\survey.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });