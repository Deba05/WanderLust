const Listing = require("./models/listing");

module.exports.isLoggedIn = (req,res,next)=>{
    console.log(req.originalUrl);

    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;

        req.flash("error","You must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();

};

module.exports.isOwner  = async (req,res,next)=>{
    const Listing = require("./models/listing");

    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!  listing.owner._id.equals (res.locals.currUser._id)){
        req.flash("error","You are not owner of the listing ! ")
        return res.redirect(`/listings/${id}`);
    }
    next();
};