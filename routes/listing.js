const express = require("express");
const Listing  = require("../models/listing.js");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");

const upload = multer({storage});



// Index and Create Route
router.route("/")
.get( wrapAsync(listingController.index)) 
.post(isLoggedIn,
    upload.single("listing[image]"),
    validateListing,

    wrapAsync(listingController.createListing ));


//New Route
router.get("/new", isLoggedIn,listingController.renderNewForm);

//Show,update and delete Route
router.route("/:id")
.get( wrapAsync(listingController.showlisting))
.put(
    isLoggedIn,
     isOwner,
    upload.single("listing[image]"),
     validateListing,
    wrapAsync(listingController.updateListing))
.delete(isLoggedIn,
    isOwner, 
    wrapAsync(listingController.destroyListing));

//Edit route
router.get("/:id/edit",isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm));


module.exports = router;
