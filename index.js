const express = require('express')
const app = express();
app.get('', (_, res)=>{
    res.send('Hello, this is home page')
});
app.get('/about', (_, res)=>{
    res.send(' this is about page')
});
app.get('/help', (_, res)=>{
    res.send(' this is help page')
});

app.listen(3000)
