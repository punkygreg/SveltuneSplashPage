// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

  

const URI = process.env.MONGO_URI ;

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    created_at :  {
        type: Date,
        default: Date.now
    }

})

const Emails = mongoose.model('Emails', EmailSchema)



mongoose.connect(URI).then(() => {
  console.log('database Connected');
});


module.exports = Emails;
