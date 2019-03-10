const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res){
    res.render("index");
})

app.get("/rwamainview", function(req, res){
    res.render("rwamain");
})

app.get("/rwachristmasview", function(req, res){
    res.render("rwachristmas");
})

app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Server has Started!");
});