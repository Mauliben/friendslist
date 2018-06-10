var express = require("express");
var app =express();
var bodyParser = require("body-parser");

//Tell express to use body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static("public"));

//Here, we put friends[] to avoid scopping issue!
var friends = ["Shruti", "Yogi", "Diana" , "Jacob", "Kim"]

app.get("/", function(req,res){

    res.render("home");
});

app.post("/addfriend", function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends"); 
});
app.get("/friends", function(req,res){
    res.render("friends", {frnd: friends});
});

app.listen(process.env.PORT, process.env.IP,function(){
   console.log("Server has listening!!"); 
});
