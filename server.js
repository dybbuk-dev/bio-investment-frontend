const express = require('express');
const bodyParser = require('body-parser');
// const functions = require('firebase-functions')
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();
// install middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(bodyParser.raw());


// static folders

const assetFolder = path.resolve(__dirname,'./build/');
app.use(express.static(assetFolder));
app.use("*", express.static(assetFolder));

// run server
const port = process.env.PORT || 5600;
const server = app.listen(port,()=>{
    console.log(`server up and running on port ${port}!`);
});


