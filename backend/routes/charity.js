const express = require('express')
const Charity = require('../models/Charity')
const router = express.Router()

//fetchallcharities get
router.get('/fetchallcharities', async(req, res) => {
    try {
        let allCharaties = await Charity.find();
        res.json(allCharaties);
    } catch(error) {
        console.log(error);
    }
})

// Route 2 fetch charity from db using id of the charity  GET"api/charity/fetchcharity" 
router.get('/fetchcharity', async(req, res) => {
    try {
        let charity = await Charity.findById(req.header('state'));
        res.json(charity);
    } catch(error) {
        console.log(error);
    }
})


//createcharity post
router.post('/createcharity', async(req, res) => {
    try {
        let charity = await Charity.findOne({charityName: req.body.charityName})
        if(charity) {
            res.status(400).send("Charity already exists")
        } else {
            charity = new Charity(req.body)
            const saved = await charity.save()
            console.log(saved)
            res.json(saved)
        }
    } catch(err) {
        console.log(err)
    }
})

//updatecharity put
router.put('/updatecharity/:id', async(req, res) => {
    try {
        let charity = await Charity.findById(req.params.id)
        if(!charity) {
            res.status(400).send('Bad request, no such charity exists')
        } else {
            charity = await Charity.findByIdAndUpdate(req.params.id, req.body)
            res.send("Updated the charity information")
        }
    } catch(err) {
        console.log(err)
    }
})

//deletecharity delete
router.delete('/deletecharity/:id', async(req, res) => {
    try {
        let charity = await Charity.findById(req.params.id)
        if(!charity) {
            res.status(400).send('Bad request, no such charity exists')
        } else {
            charity = await Charity.findByIdAndDelete(req.params.id)
            res.send("Charity deleted successfully")
        }
    } catch(err) {
        console.log(err)
    }
})

module.exports = router