const express = require('express')
const path = require('path')


const app = express();
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath))
// app.get('', (_, res)=>{
//     res.send('Hello, this is home page')
// });
// app.get('/about', (req, res)=>{
//     console.log("data sent by user ->>>", req.query)
//     res.send(`this is ${req.query.name}'s about section`)
// });
// app.get('/help', (_, res)=>{
//     res.send({
//         name:'shahbaz',
//         email:'shaib@gmail.com'
//     })
// });

app.listen(3000)
