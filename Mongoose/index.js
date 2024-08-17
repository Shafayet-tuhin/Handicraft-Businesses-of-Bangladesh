const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT ||3000 ;
const cors = require('cors');


var jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
app.use(express.json()) ; 
app.use(cors());

const BookingRouter = require('./Router/bookingRouter')
const BusinessRouter = require('./Router/businessRouter')
const ProductRouter = require('./Router/productRouter')

const DB_ID = process.env.DB_ID
const DB_PASS = process.env.DB_PASS



mongoose.connect(`mongodb+srv://${DB_ID}:${DB_PASS}@tuhin.nxzywfc.mongodb.net/Hanfcraft-BD?retryWrites=true&w=majority&appName=tuhin`)
.then(() => console.log('MongoDB Connected...'))


app.post('/jwt', (req, res) => {
  const user = req.body;
  console.log(user);

  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: '1h'
  });
  console.log(token);
  res.send({ token });
});

app.use('/bookings' , BookingRouter)
app.use('/business' , BusinessRouter )
app.use('/products' , ProductRouter )

 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})