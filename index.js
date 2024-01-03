const express = require('express');
require('./config');
const Product = require('./product');

const app = express()
app.use(express.json());

app.post('/create', async(req, res)=>{

    let data =new Product(req.body);
    let result = await data.save();

    console.log(req.body) //req.body is in stream so we have to parse it with the help of middleware -> app.use(express.json())
    res.send('done');
})
app.listen(3000)