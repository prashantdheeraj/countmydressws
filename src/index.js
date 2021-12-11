
require('./models/QRdata');
const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const QRdataRoutes = require('./routes/QRRoutes');


const app = express();
app.use(cors());
app.use(express.json())
app.use("/show",QRdataRoutes)

const mongoURI = 'mongodb+srv://countmydressadmin:countmydresspassword@cluster0.stmic.mongodb.net/countmydress?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true ,
    useUnifiedTopology:true
});

mongoose.connection.on('connected', ()=>{
    console.log('Connected to Mongo instance')
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to Mongo', err);
});


// app.get('/', (req,res) => {
//     res.send(`your Email : ${req.user.email}`);
// });

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`Listening on ${port}`);
})