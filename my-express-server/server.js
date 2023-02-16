const express = require("express");

const app = express();

app.get("/",function(request,response){
    response.send("<h1>Hello , World</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact at jugeshsm@gmail.com");
});

app.get("/about",function(req,res){
    res.send("Hello my name is Jugesh Kumar");
});

app.listen(3000,function(){
    console.log("server started at port 3000");
});