const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Route 1 add users to db POST "/api/user/adduser" --nologin required
router.post('/adduser',[
    body('firstname').isLength({min:5}),
    body('email').isEmail()
 ] ,async(req,res)=>{
    const err = validationResult(req);
    if(!err.isEmpty())
    {
        return res.status(400).send(err)
    }
    //using try catch block to catch errors
    try {
        // creating a new model instance
        const user =  new User(req.body);
        //saving the instance in db
        const savedUser = await user.save()
        console.log('user saved to database');
        res.json(savedUser)
    } catch (err) {
        console.error(err)
    }
    
})

module.exports = router;
