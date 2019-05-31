var friends = require("..data/friends");


module.exports = function(app) {
    //getting info from friends.js
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req,res) {
        //code for total difference from the survey
    })
}