const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router()
const Receipt = require('../models/Receipt');

//Route1: to upload receipt to database    /api/receipt/uploadreceipt --nologin required
router.post('/uploadreceipt',async (req,res) =>{
    try {
        //res.send(req.body)
        let receipt = new Receipt({...req.body})
        let savedReceipt = await receipt.save();
        //console.log('receipt saved in DB')
        res.status(200).send('receipt saved in DB')
    } catch (error) {
        console.error(error.message);
    }
})


//Route2: to get latest receipt of a user from database    /api/receipt/getlatestreceipt --nologin required
router.get('/getlatestreceipt',async (req,res) =>{
    try {
        let latestReceipt = await Receipt.findOne({userWallet:req.header('userWallet')}).sort({_id:-1})
        //console.log(latestReceipt)
        res.status(200).send(latestReceipt)
    } catch (error) {
        console.error(error.message);
    }
}
)

module.exports = router;