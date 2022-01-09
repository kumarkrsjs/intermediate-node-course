const express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());

const mongoose= require('mongoose');
const User = require('../models/User');
mongoose.connect('mongodb://localhost:27017/userData')

  // CREATE
router.post('/',(req,res)=>{
    // User.create()
    User.create(
        {
            name:req.body.newData.name,
            email:req.body.newData.email,
            password:req.body.newData.password
        },
        (err,data)=>{
            if (err){
            res.json({success: false,message: err})
            } else if (!data){
            res.json({success: false,message: "Not Found"})
            } else {
            res.json({success: true,data: data})
            }
        }
    )
})
  
router.route('/:id')
  // READ
  .get((req,res)=>{
    User.findById(req.params.id, (err,data)=>{
      if(err){
        res.json(
          {
            success : false,
            message: err
          }
        )
      } else if(!data){
        res.json(
          {
            success: false,
            message : "User Not Found"
          }
        )
      } else {
        res.json(
          {
            success: true,
            data: data
          }
        )
      }
    })
  })
  // UPDATE
  .put((req,res)=>{
    User.findByIdAndUpdate(
      req.params.id,
      {
        name:req.body.newData.name,
        email:req.body.newData.email,
        password:req.body.newData.password
      },
      {
        new:true
      },
      (err,data)=>{
        if (err){
          res.json({
            success: false,
            message: err
          })
        } else if (!data){
          res.json({
            success: false,
            message: "Not Found"
          })
        } else {
          res.json({
            success: true,
            data: data
          })
        }
      }
    )
  })
  // DELETE
  .delete((req,res)=>{
    // User.findByIdAndDelete()
  });

  module.exports = router ;