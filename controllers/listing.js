const Listing = require ("../models/listing");


module.exports.index = async (req,res)=>{
    const allListings= await Listing.find({})
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req,res)=>{
    console.log(req.user);
   
    res.render("listings/new.ejs");
};

module.exports.showListing = async(req,res)=>{
    let { id }= req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for doesn't exist")
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});



};

module.exports.editListing = async(req,res)=>{
    let{ id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
};

module.exports.updateListing = async(req,res)=>{
    let { id } = req.params;
   
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
     req.flash("success", " Listing Updated!");
    res.redirect(`/listings/${id}`);
};
module.exports.createListing = async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};



