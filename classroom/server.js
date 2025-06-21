const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/getcookies",(req,res)=>{
    console.dir(req.cookies);
    res.cookie("greet","hello");
    res.send("sent you some cookies!");
});
app.get("/",(req,res)=>{
    res.send("Hi! I am root");
});


app.listen(3000, ()=>{
    console.log("server is listening to port 3000");
});