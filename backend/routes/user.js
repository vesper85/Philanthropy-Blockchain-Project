const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWTSECRET_KEY = 'philanthropyblockchainproject';

// Route 1 add users to db POST "/api/user/adduser" --nologin required
router.post('/createuser',[
    body('email').isEmail()
 ] ,async(req,res)=>{
    const err = validationResult(req);
    if(!err.isEmpty())
    {
        return res.status(400).send(err)
    }
    //using try catch block to catch errors
    try {
        // searching if the username already exists in db 
        let user =await User.findOne({username:req.body.username})
        let user1 = await User.findOne({email:req.body.email})
        if(user & user1)
        {
            // username exists then return
            return res.status(400).send('sorry the user with the username already exists')
        }
        //generation of salt
        let salt = bcrypt.genSaltSync(10);

        //creating hash of password
        let securePassword = bcrypt.hashSync(req.body.password, salt);

        // creating a new model instance
        user =  new User({...req.body,password:securePassword,});

        //saving the instance in db
        const savedUser = await user.save()
        console.log('user saved to database');
        res.json(savedUser)
    } catch (err) {
        console.error(err)
    }
    
})


//Route 2 fetch user from db using id of the user  GET"api/user/fetchuser"  --login required
router.get('/fetchuser', fetchuser,async(req,res)=>{
    const user = await User.findById(req.user.id);
    res.send(user);
})

//Route 3 update user data using userid PUT "api/user/updateuser"  --login required
router.put('/updateuser',fetchuser,[
    body('email').isEmail()
], async(req,res)=>{
    //searching user in db via id
    const user = await User.findById(req.user.id);
    if (!user)
    {
        //user not found
        return res.status(400).send('Bad Request')
    }
    try {
        //new user data stored in newUser variable
        const newUser = {...req.body}

        //using findByIdAndUpdate to update the info of current user
        // new:true returns the updated user that we get
        const updatedUser = await User.findByIdAndUpdate(req.user.id, {$set:newUser}, {new:true});
        
        //acknowledgement
        console.log('user info update sucessfull');
        res.json(updatedUser);
    } catch (error) {
        console.error(error.message)
        return res.status(500).send('internal server error')
    }
    
})

// Route 4 authenticate user using POST "api/user/loginuser" --nologin required
router.post('/loginuser',async (req,res)=>{
    

    try {

        //searching for the user via username in db
        const currentUser = await User.findOne({username:req.body.username});
        if(!currentUser)
        {
            //username not found send response
            return res.status(400).send({error:'please enter valid username or password'});
        }
        //comparing password hash
        const passwordCompare = await bcrypt.compare(req.body.password,currentUser.password);
        if(!passwordCompare)
        {
            return res.status(400).send({error:'please enter valid username or password'});

        }
        const data={
            user:{
                id:currentUser.id,
            }
        }
       const jwtToken = jwt.sign(data,JWTSECRET_KEY);

       
        return res.status(200).send({jwtToken})
    }
    
    catch (err) {
        console.log('error');
        console.error(err.message)
    }


})
module.exports = router;
