const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    }
    ,
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    donationMade:{
        type:[{
            charityId:{
                type:mongoose.SchemaTypes.ObjectId,
                default:null,
            },
            timestamp:{
                type:Date,
                default:null,
            },
            amount:{
                type:Number,
                default:null,
            },
        }],
    },
    dateCreated:{
        type:Date,
        default:Date.now
    }
    

});

module.exports = mongoose.model('user',userSchema);