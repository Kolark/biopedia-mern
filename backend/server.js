require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');


const app = express();
const apiRoutes = require('./routes/api');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/api',apiRoutes);
app.use('/uploads',express.static('uploads'));

//---------------------

const uri = process.env.MONGODB_URI;
mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Database connected')
}).catch((error)=>{
    console.log('Database connection failed');
    console.log(error);
});

//---------------------
app.listen(port,()=>{
    console.log('Listening on port '+ port)})

// const mongoose = require('mongoose')