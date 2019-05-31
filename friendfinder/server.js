var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//possibility of adding content


const apiRoutes = require("\routing\apiRoutes.js");
app.use("\routing\apiRoutes",apiRoutes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });