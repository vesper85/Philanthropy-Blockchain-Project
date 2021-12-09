const express = require('express')
const Stats = require('../models/Stats')
const router = express.Router()

//fetchallstats get
router.get('/fetchallstats', async(req, res) => {
    try {
        let allStats = await Stats.find();
        res.json(allStats);
    } catch(error) {
        console.log(error);
    }
})

//fetchstats get
router.get('/fetchstats', async(req, res) => {
    try {
        let stats = await Stats.find({cause:req.header('cause')});
        res.json(stats);
    } catch(error) {
        console.log(error);
    }
})

//createnewstats post
router.post('/createnewstats', async(req, res) => {
    try {
        let stats = await Stats.findOne({cause: req.body.cause})
        if(stats) {
            res.status(400).send("Stats already exists")
        } else {
            stats = new Stats(req.body)
            const saved = await stats.save()
            console.log(saved)
            res.json(saved)
        }
    } catch(err) {
        console.log(err)
    }
})

//updatestats put
router.put('/updatestats/:id', async(req, res) => {
    try {
        let stats = await Stats.findById(req.params.id)
        if(!stats) {
            res.status(400).send('Bad request, no such stats exists')
        } else {
            stats = await Stats.findByIdAndUpdate(req.params.id, req.body)
            res.send("Updated the stats")
        }
    } catch(err) {
        console.log(err)
    }
})

//deletestats delete
router.delete('/deletestats/:id', async(req, res) => {
    try {
        let stats = await Stats.findById(req.params.id)
        if(!stats) {
            res.status(400).send('Bad request, no such stats exists')
        } else {
            stats = await Stats.findByIdAndDelete(req.params.id)
            res.send("Stats deleted successfully")
        }
    } catch(err) {
        console.log(err)
    }
})

module.exports = router