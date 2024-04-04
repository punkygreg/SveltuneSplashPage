// import express from 'express'
// import emailControllers from './Controllers/emailControllers.js'

const express = require('express');
const emailControllers = require('./Controllers/emailControllers.cjs');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());

let port = 3333;


// if (process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, '/build')));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
//   }) 
// } else {
//   app.get('/'), (req,res) => {
//     res.send('server is running...')
//   }
// }

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, '/index.html'))
}) 

app.post('/email', emailControllers.postEmail, (req, res) => {
  res.status(200).json(res.locals.email);
});
// app.delete('/email/:id', emailControllers.deleteEmail, (req, res) => {
//   res.status(200).json('deleted');
// });

app.use('*', (req, res) => {
  res.status(404).json('Path not found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'middleware problem',
    status: 500,
    message: { err: 'Earthquake' },
  };

  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  res.status(errObj.status).json(errObj.message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
