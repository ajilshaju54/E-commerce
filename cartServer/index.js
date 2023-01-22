// server creation

const db = require('./db.json')
// import express
const express = require('express');

//import cors
const cors=require('cors')

//using express, create an application
const app = express();

//3 set up port number
app.listen(3000,()=>{
    console.log("port 3000 express file listening")
})
 

//4 use json parser for server application
app.use(express.json());


//using cors specify origin to the server - set frontend code

app.use(cors({
    origin:"http://localhost:4200"
}))


const dataservice = require('./services/dataService')


//API to get all product
app.get('/all-products',(req,res)=>{
    
    dataservice.getAllProducts()
    .then(result=>{
        console.log(result);
        res.status(result.statusCode).json(result)
        console.log(result);
        
    })
})
     
     //api to addtowishlist

     app.post('/addtowishlist',(req,res)=>{
       dataservice.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image)
       .then((result)=>{
        console.log(result);
        res.status(result.statusCode).json(result)
       })

     })


     //api for getting wishlist product

     app.get('/getwishlist',(req,res)=>{
        dataservice.getwishlist().then(
            (result)=>{
                res.status(result.statusCode).json(result)
            }
        )
     })


     //delete from wishlist

     app.delete('/deletewish/:id',(req,res)=>{
        dataservice.deleteItem(req.params.id).then(
            (result)=>{
                res.status(result.statusCode).json(result)
            }
        )
     })

