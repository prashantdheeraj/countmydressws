const express = require('express');
const mongoose = require('mongoose');
const QRdata = mongoose.model('QRdata');

const router = express.Router();



// Gets the QRData by id
router.get('/', async (req,res) => {
    
    //console.log("i am in get")
    const uuid = req.params.id;
    //console.log(uuid)
    try {
        const QRdata = await QRdata.find({uuid: uuid}).exec()
        return res.send({QRdata});
      } catch (error) {
        //console.log(`Error in fetching blog details : ${error}`);
        return res.status(422).send({error: 'Problem Fetching the Data'});
      }
    
});

// Gets the QRData by id
router.get('/:id', async (req,res) => {

    const uuid = req.params.id;
    //console.log(uuid)
    try {
        const data = await QRdata.find({uuid: uuid}).exec()
        //console.log(data)
        return res.send({data});
      } catch (error) {
        //console.log(`Error in fetching blog details : ${error}`);
        return res.status(422).send({error: 'Problem Fetching the QRData'});
      }
    
});

// Gets the QRData by device ID
router.get('/device/:id', async (req,res) => {

  const deviceId = req.params.id;
  //console.log(uuid)
  try {
      const data = await QRdata.find({deviceId: deviceId}).exec()
      //console.log(data)
      return res.send({data});
    } catch (error) {
      //console.log(`Error in fetching blog details : ${error}`);
      return res.status(422).send({error: 'Problem Fetching the QRData'});
    }
  
});

// Gets the QRData by User ID
router.get('/user/:id', async (req,res) => {

  const userId = req.params.id;
  //console.log(uuid)
  try {
      const data = await QRdata.find({userId: userId}).exec()
      //console.log(data)
      return res.send({data});
    } catch (error) {
      //console.log(`Error in fetching blog details : ${error}`);
      return res.status(422).send({error: 'Problem Fetching the QRData'});
    }
  
});




// Creates a blog
router.post("/:id", async(req,res)=> {

  const {uuid, deviceId, userId, itemDescription,itemCategory, deviceInfo, scanData} = req.body;
  let newQRdata = {uuid,deviceId,userId,itemDescription,itemCategory,deviceInfo,scanData};
  //console.log(newQRdata)
  try {
    let createQRData = await QRdata.create(newQRdata);
    return res.send({createQRData});
  } catch (error) {
    console.log(error);
    return res.status(422).send({error: 'Problem Creating new QR data from some'});
  }

});



// Update the QR code data entry
router.put("/:id", async (req,res) => {

  let uuid =  req.params.id; //This is blog Id to be updaated
  const {itemDescription,itemCategory,deviceInfo, scanData} = req.body; // For updating the blog title and body by the user
 
  try {
    
    const filter = { uuid: uuid };
    const update = { itemDescription,itemCategory,deviceInfo, scanData}; 
     
    // check if the blog belongs to the user and then only allow to delete
    let QRdataforUuid = await  QRdata.findOneAndUpdate(filter, update)

      //console.log('i reached here')
    return res.send({QRdataforUuid});
     
  } catch (error) {
      console.log(error)
      return res.status(422).send({error: 'Unable to update the QRData'})
  }
})

router.delete("/:id", async(req,res)=> {
  try {
    let uuid =  req.params.id; //This is blog Id to be updaated
    const filter = { uuid: uuid };
    let result = await QRdata.deleteOne(filter)
    return res.send({result});
  } catch (error) {
      console.log(error)
      return res.status(422).send({error: 'Unable to delete the QRData'})
  }
})

module.exports = router;