const mongoose = require('mongoose');

const QRdataSchema = new mongoose.Schema({
    uuid: {
        type:String,
        required: true
    },
    deviceId:{
        type:String,
        required: true
    },
    userId:{
        type:String,
    },
    itemDescription:{
        type:String,
        required: true
    }, 
    deviceInfo:[{
        deviceTimestamp: String,
        deviceBrand: String,
        deviceModel: String,
        deviceManufacturer: String
    }],   
    scanData:[{
        scanTimestamp: String,
        latitude: String,
        longitude: String,
        location: String
    }],
    
});

mongoose.model('QRdata', QRdataSchema);