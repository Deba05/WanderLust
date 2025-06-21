const express = require("express");
const app= express();

app.get("/posts",(req,res)=>{
    res.send("Get for users");
});

//Show posts
app.get("/posts/:id",(req,res)=>{
    res.send("GET for user id");
});

//POST- posts
app.post("/posts", (req,res)=>{
    res.send("POST for users");

});

//DELETE- posts
app.delete("/posts/:id",(req,res)=>{
    res.send("DELETE for users");
});