 const mongoose = require('mongoose')

 const main = async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    // schema validates the field in databases and define fields
    const productSchema = new mongoose.Schema(
        {
            name: String,

        }
    );

    // model basically schemas ko use ker k mongodb aur mongoose ko connect krta hai

    const productsModel = mongoose.model('products', productSchema);
    let data = new productsModel({name: 'm14'});
    let result = await data.save();
    console.log(result);
}

main();

 