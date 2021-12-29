const express = require('express')
const router = express.Router()
const Receipt = require('../models/Receipt');

//Route1: to upload receipt to database    /api/receipt/uploadreceipt --nologin required
router.post('/uploadreceipt',async (req,res) =>{
    try {
        //res.send(req.body)
        let receipt = new Receipt({...req.body})
        let savedReceipt = await receipt.save();
        console.log('receipt saved in DB')
        res.status(200).send('receipt saved in DB')
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;