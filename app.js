const express = require('express')
// const router = express.Router();
const motorModel = require('./Model/Bai1Model')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const uri = 'mongodb+srv://hoangthanh:03102004@cluster0.ijszexm.mongodb.net/PH40777_MD18306';
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


app.listen(port, () => {
  console.log('Run server port 3000');
})
app.get('/', async (req, res) => {
  try {
    await mongoose.connect(uri)
    let motor = await motorModel.find()
    console.log(motor);
    res.send(motor)
  } catch (error) {
    
  }
})


app.delete('/delete/:_id', async (req, res) => {
  try {
    await mongoose.connect(uri)

    let id = req.params._id
    console.log(id);
    await motorModel.deleteOne({ _id: id })
    res.redirect('../')


  } catch (error) {
    console.log(error);
  }
})