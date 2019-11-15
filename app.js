
var express=require("express");
var bodyParser=require("body-parser");
var fetch=require("node-fetch");
var pug=require("pug");

var app=express();

var Books=require("./models/books");
var Characters=require("./models/characters");
var Houses=require("./models/houses");

app.get("/",(req,res)=>{
    res.send("Hola");
});

app.listen(1250);


