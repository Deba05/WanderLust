const express= require("express");
const app = express();
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");
app.use(express.urlencoded({ extended: true }));
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
router.get("/signup", (req,res)=>{
res.render("users/signup.ejs");
});

router.post("/signup",wrapAsync(async(req,res)=>{
    try{
    
    let {username,email,password} =  req.body;
    const newUser= new User({username,email});
    const registeredUser = await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err);

        }
      req.flash("success","Welcome to wanderlust");
      res.redirect("/listings");
    });
    console.log("BODY:", req.body);
   

    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
    
   
}));

router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
});

router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect: '/login', failureFlash: true}), async(req,res)=>{
    req.flash("success","Welcome back to wanderLust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
});
router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","You are logged out now!");
        res.redirect("/listings");
    })
})
module.exports = router;
