const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortID : {
        type : String , 
        required: true,
        unique: true,
    } , 
    redirectURL : {
        type : String , 
        required: true,
    },
    visitHistory : [{ timestamp : {type : Number}}] 
} , { timestamps : true });  // kab entry hui woh mark krna h 

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;