const dbConnect = require('./mongodb');

const update = async ()=>{
    const db = await dbConnect();
    const result = await db.updateOne(
        {name: 'm14'},
        {
            $set: { name: 'm 40', price:90, brand: 'vivo'}
        }
    )
    console.log('data updated!!!')
}
update()