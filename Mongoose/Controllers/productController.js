const Product = require('../Model/productModel')

exports.postProduct = async (req, res) => {
    try {
        const result = await Product.create(req.body)
        res.status(201).send(result)
    }
    catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}


exports.getProduct = async (req, res) => {
    try {
        const sortOrder = req.query.sort === 'asc' ? 1 : -1;
        const result = await Product.find().sort({ price: sortOrder });
        res.send(result);
    } 
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};



exports.getSingleProduct = async (req, res) => {
    try {

        const id = req.params.id
        const result = await Product.findById(id)
        res.send(result)
    }
    catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}