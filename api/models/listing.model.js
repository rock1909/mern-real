import mongoose from "mongoose";

const listingSchema = new mongoose.Schema (
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        regularPrice:{
            type: Number,
            required: true,
        },
        propertyType:{
            type: String,
            required: true,
        },
        bedrooms:{
            type: Number,
            required: true,
        },
        bathrooms:{
            type: Number,
            required: true,
        },
        furnished:{
            type: Boolean,
            required: true,
        },
        parking:{
            type: Boolean,
            required: true,
        },
        parking2:{
            type: Boolean,
            required: true,
        },
        imagesUrls:{
            type: Array,
            required: true,
        },
        userRef:{
            type: String,
            required: true,
        },
    }, {timestamps: true}

);


const Listing = mongoose.model('Listing', listingSchema);

export default Listing;