const mongoose = require('mongoose')

const charityDonationsSchema = new mongoose.Schema({
    charityName: {
        type: String,
        required: true
    },
    donorName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("CharityDonations", charityDonationsSchema)