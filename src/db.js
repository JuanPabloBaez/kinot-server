const mongoose = require('mongoose');


//Set up default mongoose connection
const mongoDB = process.env.DATABASE_URL

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

//Get the default connection
const db = mongoose.connection

//Bind connection to error event (to get notification of connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db