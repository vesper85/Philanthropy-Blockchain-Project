const mongoose = require('mongoose')

const charitySchema = new mongoose.Schema({
    charityName: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    previousWork: {
        type: String
    },
    cause: {
        type: String,
        required: true
    },
    goal: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    fundsRaised: {
        type: Number,
        default: 0
    },
    walletAddress: {
        type: String,
        unique: true,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: true
    },
    donationHistory: {
        type: [{
            userName: {
                type: String,
                default: null
            },
            timestamp: {
                type: Date,
                default: null
            },
            amount:{
                type: Number,
                default: null,
            }
        }]
    }
})

module.exports = mongoose.model("Charity", charitySchema)