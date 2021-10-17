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
//updatecharity put
//deletecharity delete
module.exports = router