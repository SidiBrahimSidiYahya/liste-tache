const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
var items =["Buy food","cook food","eat food"];
app.get('/',function(req,res){
    var today = new Date();
    var option={
        weekday:"long",
        day:"numeric",
        month:"long",
    }
    var day = today.toLocaleDateString("en-US", option)
    
    res.render("index",{day:day,newListItem:items});
    
})
app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})
app.listen(5000,function(){
    console.log("you have listerning in port 5000")
})