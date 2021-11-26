const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstname:{
        type:String,
    },
    lastname:{
        type:String,
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
    },
    address:{
        type:String,
    },
    age:{
        type:String,
    },
    company:{
        type:String,
    },
    superUser:{
        type:Boolean,
        default:false
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