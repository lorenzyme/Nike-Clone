const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ******************************************************************************************

// GET ALL THE PRODUCTS
router.get('/', async (req, res) => {

    try {
        const products = await prisma.products.findMany()
        res.json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding products'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/products/

// ******************************************************************************************

// MAKE A NEW PRODUCT
router.post('/new', async (req, res) => {

    try {
        const { name, color, size, forkids, details, cost, img, category } = req.body;
        const newProduct = await prisma.products.create({
            data: {
                name,
                color,
                size,
                forkids,
                details,
                cost,
                img,
                category
            }
        })
        res.json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong creating a new product'});
    }
})

// POSTMAN "POST" ROUTE --> http://localhost:3000/nike/products/new

// BODY TEXT FOR POSTMAN TO MAKE A NEW PRODUCT
// {
//     "id": 3,
//     "name": "watch",
//     "color": "gold",
//     "size": "big"
//     "forkids": false,
//     "details": "some content",
//     "cost": 5.70,
//     "img": "put url here"
//     "category": "accessories"
// }

// ******************************************************************************************

// UPDATE AN EXISTING PRODUCT
router.put('/:id', async (req, res) => {
    try {
        const productsId = parseInt(req.params.id);
        const { name, color, size, forkids, details, cost, img, category } = req.body;

        const updateItem = await prisma.products.update({
            where: {id: parseInt(productsId)},
            data: {
                name,
                color,
                size,
                forkids,
                details,
                cost,
                img,
                category
            }
        });
       return  res.json(updateItem);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong updating a product'});
    }
})

// POSTMAN "PUT" ROUTE --> http://localhost:3000/nike/products/1
// Change the "1" to the id number of the item you want to update

// BODY TEXT FOR POSTMAN TO MAKE AN UPDATE
// {
//     "name": "necklace",
//     "color": "silver",
//     "size": "28 inch",
//     "forkids": false,
//     "details": "some content",
//     "cost": 5.70,
//     "img": "put url here",
//     "category": "shoes"
// }

// ******************************************************************************************

// DELETE A PRODUCT
router.delete('/:id', async (req, res) => {
    try {
        const productsId = parseInt(req.params.id);
        await prisma.products.delete({
            where: {id: productsId}
        })
        return res.json({message: 'Product deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong deleting a product'});
    }
})

// POSTMAN "DELETE" ROUTE --> http://localhost:3000/nike/products/1
// Change the "1" to the id number of the item you want to delete

module.exports = router;