const BookingProduct = require('../Model/booking.model')

exports.getBookingProduct = async ( req,res) => {
    try{     
              const email = req.query.email ;
              const result = await BookingProduct.find({email})
              res.json(result)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.postBooking = async (req,res) => {
    try{
        const booking = req.body ;
        const result = await BookingProduct.create(booking)
        res.send(result);
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { email } = req.body; 

        // console.log(email); 

        await BookingProduct.findByIdAndDelete(id);
        const result = await BookingProduct.find({ email }); 
        res.json({ message: "success", Data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.updateBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const { email} = req.body;
  
        await BookingProduct.findByIdAndUpdate(id , { status:"confirmed"} , {new:true})
        

        const result = await BookingProduct.find({ email });
        res.json({ acknowledged: true, result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};