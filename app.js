const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

let items =["Buy food","cook food","eat food"];
let workItems =[];

app.get('/',function(req,res){
    
    
    res.render("index",{listTitle:date.getDay(),newListItem:items});
    
});

app.get('/work',function(req,res){

    res.render('index', {listTitle:"work List",newListItem:workItems})
});


app.post("/",function(req,res){
    let item = req.body.newItem;
    
    if(req.body.list === "work List"){
        workItems.push(item);
        res.redirect('/work')
    }else{
    items.push(item);
    res.redirect("/");
    };
});

app.post('/work',function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})


app.listen(5000,function(){
    console.log("you have listerning in port 5000")
})