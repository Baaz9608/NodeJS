const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url);

// method 1
async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
     
}

module.exports = dbConnect;

// method 2
// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let res = await collection.find({}).toArray();
//     console.log(res)
// }

// dbConnect().then((res)=>{
//     console.log(res.find().toArray());
// })

// console.warn(dbConnect()) 

