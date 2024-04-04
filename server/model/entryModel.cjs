// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const myURI =
  'mongodb+srv://jameslee4988:jameslee@cluster0.eqmdxxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const URI = process.env.MONGO_URI || myURI;

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
