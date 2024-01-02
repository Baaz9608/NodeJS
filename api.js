const express = require('express');
const dbConnect = require('./mongodb');

const app = express();
app.use(express.json()) //middleware for getting data from api instead of body parser after 4.6v

app.get('/',async (req, res)=>{
    let data =await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)
});

app.post('/', async (req, res)=>{
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insertMany([
        {
            name: 'pert'
        },
        {
            name: 'base'
        }
    ])
    res.send({name:'Peter Parker'})
})

app.put('/:name', async(req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
    )
    console.log(result, {result: 'updated'})
})

const mongodb = require('mongodb')
app.delete('/:id', async(req, res)=>{
    console.log(req.params.id);
    const data = await dbConnect({
        _id: new mongodb.ObjectId(req.body.id)
    });
    const result = await data.deleteOne(

    )
    res.send('done');
})

app.listen(3000)