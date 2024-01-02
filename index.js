const express = require('express')
const path = require('path')
const reqFilter = require('./middleware.js')
const route = express.Router();


const app = express();
const publicPath = path.join(__dirname, 'public');
route.use(reqFilter);

const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let res = await collection.find({}).toArray();
    console.log(res)
}
getData();




// app.use(reqFilter);

app.set('view engine', 'ejs');

// app.get('', reqFilter, (_, res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })
app.get('/login ', (_, res)=>{
    res.render('login')
})

app.get('/profile', (_, res)=>{
    const user = {
        name: 'Kunal',
        age: 22,
        email: 'kunal@gmail.com',
        skills: ['php','js','python']
    }
    res.render('profile', {user});
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
route.get('/contact',(_,res)=>{
    res.send("welcome to contact page")
})
app.use('/', route);


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
