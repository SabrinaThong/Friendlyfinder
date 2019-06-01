var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//possibility of adding content


require("./app/routing/apiRoutes")(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });