//import mongoose
const mongoose = require('mongoose')

//define connection string
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce?directConnection=true',{
    useNewUrlParser:true
    // to avoide warning we use useNewUrlParser
})
.then(() => { console.log('MongoDB connected!!');

})
.catch(err => { console.log('Failed to connect to MongoDB', err); });


//create model to store all products

 //Product is the collction product in database as we created
  //but here first letter should be written in capital and last..word "s" should be remove
                                                     
//here model is product and 
//Schema is id,title,price....etc
const Cartproduct = mongoose.model('Cartproduct',{       
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }

})


//create model to add wishlist products
//create a colllection in mongodb
//create a model
const Wishlist = mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
   
    image:String,
    
})


module.exports = {
    Cartproduct,
    Wishlist

}