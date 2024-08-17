const mongoose = require("mongoose");

// Define the schema for the BusinessPage
const businessPageSchema = new mongoose.Schema({
    page_name: {
        type: String,
        required: true,
    },
    page_description: {
        type: String,
        required: true,
    },
    years_of_operation: {
        type: Number,
        required: true,
    },
    number_of_products: {
        type: Number,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
});


const BusinessPage = mongoose.model("BusinessPage", businessPageSchema);

module.exports = BusinessPage;
