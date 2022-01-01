const mongoose = require('mongoose')

const receiptSchema = new mongoose.Schema({
    blockHash:{
        type: String,
        required: true
    },
    blockNumber:{
        type:Number,
        required:true
    },
    contractAddress: {
        type:String
    },
    cumulativeGasUsed:{
        type:Number
    },
    from:{
        type:String
    },
    gasUsed:{
        type:Number
    },
    logs: {
        type:[]
    },
    logsBloom:{
        type:String
    },
    status:{
        type:Boolean
    } ,
    to:{
        type:String
    },
    transactionHash: {
        type:String
    }
    ,
    timestamp:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Receipt",receiptSchema);