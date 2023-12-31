const express = require('express')
const path = require('path')


const app = express();
const publicPath = path.join(__dirname, 'public');
app.set('view engine', 'ejs');

app.get('', (_, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (_, res)=>{
    const user = {
        name: 'Kunal',
        age: 22,
        email: 'kunal@gmail.com'
    }
    res.render('profile', {user});
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})


// app.use(express.static(publicPath))
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
