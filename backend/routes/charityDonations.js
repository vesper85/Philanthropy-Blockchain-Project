const express = require('express')
const CharityDonations = require('../models/CharityDonations')
const router = express.Router()

// get donations of a particular charity from db   GET"api/charitydonations/fetchdonationsbycharity" 
router.get('/fetchdonationsbycharity', async(req, res) => {
    try {
        let charityDonations = await CharityDonations.find({charityName:req.header('charityName')});
        res.json(charityDonations);
    } catch(error) {
        console.log(error);
    }
})

// get donations of a particular user from db   GET"api/charitydonations/fetchdonationsbyuser" 
router.get('/fetchdonationsbyuser', async(req, res) => {
    try {
        let charityDonations = await CharityDonations.find({username:req.header('username')});
        res.json(charityDonations);
    } catch(error) {
        console.log(error);
    }
})

// post donations of a particular charity 
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