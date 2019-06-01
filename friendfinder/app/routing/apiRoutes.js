var friends = require("../data/friends");


function friendList(app) {
    //getting info from friends.js
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req,res) {
        //code for total difference from the survey
        var totalDifference = (req.body.scores);
        var userName  = {};
        var userImage = {};

        friends.forEach(function(friendList) {
            var scores = {};
            var preScore = 50;

            function add (total, num) {
                return total + num;
            };
            
            for (var i = 0; i<friendList.length;i++) {
                scores.push(Math.abs(parseInt(reg.body.scores[i]) - parseInt(friendList.scores[i])));
            }

            totalDifference = scores.reduce(add,0);

            if (totalDifference < preScore) {
                userName = friends.name;
                userImage = friends.photo;
            }
        });

        res.json({
            name: userName,
            photo: userImage,
        });
        res.send(req.body);
    });
   
};

module.exports = friendList;