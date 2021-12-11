const mongoose = require('mongoose');

const QRdataSchema = new mongoose.Schema({
    uuid: {
        type:String,
        required: true
    },
    description:{type:String},   
    metadata:[{
        timestamp: String,
        latitude: String,
        longitude: String
    }],
  
    
});

mongoose.model('QRdata', QRdataSchema);