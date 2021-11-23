const express = require('express')
const Charity = require('../models/Charity')
const router = express.Router()

//fetchallcharities get
router.get('/fetchallcharities', async(req, res) => {
    try {

    console.log("/fetchallcharities route")
    let allCharaties = await Charity.find();
    //console.log(allCharaties);
    res.json(allCharaties);
    } catch(error) {
        console.log(error);
    }
    //let allCharities = {}
    //await Charity.find({}, (err, charities) => {
    //    charities.forEach(charity => {
    //        allCharities[charity._id] = charity
    //    })
    //    res.send(allCharities)
    //})
})

//createcharity post
router.post('/createcharity', async(req, res) => {
    console.log("/createcharity route")
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
    console.log("/updatecharity route")
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
    console.log("/deletecharity route")
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