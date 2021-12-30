const express = require('express')
const CharityDonations = require('../models/CharityDonations')
const router = express.Router()

// get donations of a perticular charity from db   GET"api/charitydonations/fetchdonations" 
router.get('/fetchdonationsbycharity', async(req, res) => {
    try {
        let charityDonations = await CharityDonations.find({charityName:req.header('charityName')});
        res.json(charityDonations);
    } catch(error) {
        console.log(error);
    }
})

// post donations of a perticular charity 
router.post('/adddonations', async(req, res) => {
    try {
        let charityDonations = new CharityDonations(req.body)
        const saved = await charityDonations.save()
        console.log(saved)
        res.json(saved)    
    } catch(err) {
        console.log(err)
    }
})

module.exports = router