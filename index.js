const express = require('express')
const app = express();
app.get('', (_, res)=>{
    res.send('Hello, this is home page')
});
app.get('/about', (req, res)=>{
    console.log("data sent by user ->>>", req.query)
    res.send(`this is ${req.query.name}'s about section`)
});
app.get('/help', (_, res)=>{
    res.send({
        name:'shahbaz',
        email:'shaib@gmail.com'
    })
});

app.listen(3000)
