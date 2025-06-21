const express= require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require ("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Review = require ("../models/review.js");


const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};






//REVIEWS
router.post("/reviews",validateReview, wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    
    console.log("new review saved");
     req.flash("success", "New Review Created!");
    // res.send("new review saved");
    res.redirect(`/listings/${listing._id}`);
}));
//DELETE REVIEW ROUTE
router.delete("/:reviewId",wrapAsync(async(req,res) =>{
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {review: reviewId}});
    await Review.findByIdAndDelete(reviewId);
     req.flash("success", "Review Deleted!");

    res.redirect(`/listings/${id}`);
})
);

module.exports = router;