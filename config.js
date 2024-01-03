const mysql = require('mysql');


const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});
conn.connect((err)=>{
    if(err){
        console.log('error in connection');
    }else{
        console.log('connected!')
    }
})

module.exports = conn;