const express = require('express')
const Charity = require('../models/Charity')
const router = express.Router()

//fetchallcharities get
router.get('/fetchallcharities', async(req, res) => {
    console.log("/fetchallcharities route")
    let allCharities = {}
    await Charity.find({}, (err, charities) => {
        charities.forEach(charity => {
            allCharities[charity._id] = charity
        })
        res.send(allCharities)
    })
})
//createcharity post
router.post('/createcharity', async(req, res) => {
    console.log("/createcharity route")
    try {
        let charity = await Charity.findOne({charityName: req.body.charityName})
        if(charity) {
            res.status(400).send("Charity already exists")
        } else {
            charity = new Charity({...req.body})
            const saved = await charity.save()
            console.log(saved)
            res.json(saved)
        }
    } catch(err) {
        console.log(err)
    }
})
//updatecharity put
//deletecharity delete
module.exports = router