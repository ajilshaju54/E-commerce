//import db

const db = require('./db')

//get all product from database

const getAllProducts = () => {
    //to fetch product from mongodb
    console.log("5")
    return db.Cartproduct.find().then(
        (result) => {

        if(result) {
            console.log(result);
            return {

                status: true,
                statusCode: 200,
                products:result
            }
        }
        else {
            return {
                status: false,
                statusCode: 402,
                message: 'product not found'
            }
        }
    })
}


//add wishlist

const addtowishlist= (id,title,price,description,image)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'product already exist'
                }
            }
            else{
                const newProduct=new db.Wishlist({
                    id,
                    title,
                    price,
                    description,
                    image
                })
                newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'product added successfully'
                }
            }
        }
    )
}


const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Your wishlist is empty'
                }
            }
        }
    )
}

const deleteItem=(id)=>{
   return db.Wishlist.deleteOne({id}).then(
    (result)=>{
        if(result){
        return{
             status:true,
             statusCode:200,
             message:"product deleted successfully"
        }
    }
         else{
            return{
                status:false,
                statusCode:401,
                message:"product not found"
            }
         }
}
   )
}


module.exports = {
    getAllProducts,
    addtowishlist,
    getwishlist,
    deleteItem
}
