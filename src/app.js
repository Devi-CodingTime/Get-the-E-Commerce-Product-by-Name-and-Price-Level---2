const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

//Middlewares
app.use(express.json());

// GET endpoint for sending the products to client by id
//// Endpoint - /api/v1/products/:id

app.get('/api/v1/products/:id',(res,req)=>{
    const prod = products.find((product)=>{product.id==res.params.id})
    if(!prod)
    {
        return res.status(404).json( { status: "failed", message: "Product not found!" })
    }
    else{
      return  res.status(200).json({
            status: "success", 
        
            message: "Product fetched successfully",
        
            data:{products}
            })
    }
})
module.exports = app;
