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
        // console.log(saved)
        res.json(saved)    
    } catch(err) {
        console.log(err)
    }
})

router.delete('/deletedonationhistorybycharity', async(req, res) => {
    try {
        let donations = await CharityDonations.find({charityName:req.header('charityName')})
        if(!donations) {
            res.status(400).send('Bad request, no such charity exists')
        } else {
            donations = await CharityDonations.deleteMany({charityName:req.header('charityName')})
            res.send("Charity's donation history deleted successfully")
        }
    } catch(err) {
        console.log(err)
    }
})

// update donations of a particular charity from db having particular status   GET"api/charitydonations/fetchdonationsbycharity" 
router.put('/updatependingdonationsbycharity', async(req, res) => {
    try {
        let charityDonations = await CharityDonations.updateMany({charityName:req.header('charityName'), status:req.header('status')}, req.body);
        res.json(charityDonations);
    } catch(error) {
        console.log(error);
    }
})

module.exports = router