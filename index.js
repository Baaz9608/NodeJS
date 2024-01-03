const express = require('express');
const conn = require('./config');
const app = express();
app.get('/',(req, res)=>{
    conn.query('select * from users', (err, result)=>{
        if(err){
            console.log('error')
        }else{
            res.send(result)
        }
    })
})
app.listen(3000);




// const mysql = require('mysql');
// const conn = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password:"",
//     database:'test'
// });
// conn.connect((err)=>{
//     if(err){
//         console.log('error')
//     }else{
//         console.log('connected')
//     }
// });

// conn.query('select * from users', (err, result)=>{
//     console.log('result: ',result)
// })