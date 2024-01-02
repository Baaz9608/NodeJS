 const mongoose = require('mongoose')

 const saveInDB = async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    // schema validates the field in databases and define fields
    const productSchema = new mongoose.Schema(
        {
            name: String,
            price: Number,
            brand: String,
            category: String,
           
        }
    );

    // model basically schemas ko use ker k mongodb aur mongoose ko connect krta hai

    const productsModel = mongoose.model('products', productSchema);
    let data = new productsModel({name: 'm14'});
    let result = await data.save();
    console.log(result);
}

const updateInDB = async()=>{
    const product = mongoose.model('products', productSchema);

    let data = await product.updateOne(
        {name: 'max 7'},
        {$set: {price: 800, name:'max 8'}}
    )
    console.log(data);
}

const deleteInDB = async ()=>{
    const product = mongoose.model('product', productSchema);
    let data = await product.deleteOne({name: 'max 8'});
    console.log(data);
}

const findInDB = async ()=>{
    const product = mongoose.model('product', productSchema);
    let data = await product.find();
    console.log(data);
}


 