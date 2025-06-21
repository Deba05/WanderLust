const express = require ("express");
const router = express.Router();
const wrapAsync = require ("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require ("../models/listing.js");
const {isLoggedIn,isOwner} = require("../middleware.js");
// const validateListing = (req,res,next)  => {
//     let {result} = listingSchema.validate(req.body);
    
//     if(result.error){
//         throw new ExpressError(400, result.error);
//     }else{
//         next();
//

// }
const listingController = require("../controllers/listing.js");
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error.details[0].message);
    } else {
        next();
    }
};

router.get("/",isLoggedIn,wrapAsync(listingController.index));


//NEW ROUTE
router.get("/new",isLoggedIn,listingController.renderNewForm);


//SHOW ROUTE
router.get("/:id",isLoggedIn,wrapAsync(listingController.showListing));

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListing));
//UPDATE ROUTE 
router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updateListing));

//CREATE ROUTE

router.post("/", validateListing, wrapAsync(listingController.createListing)); 

//DELETE ROUTE 
router.delete("/:id",isLoggedIn,isOwner,wrapAsync( async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", " Listing Deleted!");
  res.redirect("/listings"); 
}));

module.exports = router;