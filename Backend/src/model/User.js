const mongoose = require('mongoose')
//to set the schema of the model
const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
})

//export the modeule (mongoose.model('what u want to call the model',the schema it will follow))
module.exports = mongoose.model('User',userSchema);