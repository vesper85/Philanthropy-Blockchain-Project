const mongoose = require('mongoose')

const statsSchema = new mongoose.Schema({
    cause: {
        type: String,
        unique: true,
        required: true
    },
    stat1: {
        type: String,
        required: true
    },
    stat2: {
        type: String,
        required: true
    },
    stat3: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Stats", statsSchema)