const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        customerName: {
            type: 'string',
            required: true
        },

        email: {
            type: 'string',
            required: true,
        },

        date:{
            type: Date,
            required: true
        },

        title:{
            type: 'string',
            required: true
        },

        item_id:{
            type: 'string',
            required: true
        },

        price:{
            type: 'number',
            required: true
        },

        img:{
            type:'string',
            required: true
        },
        status:{
            type: 'string',
            default:"pending"
        }
    }

)

const BookingProduct = mongoose.model("booking" , productSchema)

module.exports = BookingProduct;