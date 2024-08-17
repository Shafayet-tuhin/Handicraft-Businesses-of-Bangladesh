const BusinessPage = require('../Model/businessModel')

exports.postBusiness = async (req,res) => {
    try {
        const business = await BusinessPage.create(req.body)
        res.status(201).json(business)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getBusiness = async (req,res) => {
    try{
            const result = await BusinessPage.find() ;
            res.json(result)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}