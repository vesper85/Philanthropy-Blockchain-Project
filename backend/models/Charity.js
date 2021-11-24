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
    fundsRaised: {
        type: Number,
        default: 0
    },
    imageURLs: {
        type: [{
            url: {
                type: String,
                default: null
            }
        }]
    },
    externalLinks: {
        type: [{
            url: {
                type: String,
                default: null
            }
        }]
    },
    donationHistory: {
        type: [{
            userId: {
                type: mongoose.SchemaTypes.ObjectId,
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