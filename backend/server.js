const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
	(err) => {
		if (err) {
			console.log("Some Unexpected Error Occured", err);
		} else{
			console.log("Connected to Mongodb Atlas");
		}
    }
);

app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})