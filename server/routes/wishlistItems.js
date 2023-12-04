const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ******************************************************************************************

// GET ALL THE WISHLISTITEMS FOR SPECIFIC USER
router.get('/', async (req, res) => {

    try {
        const token = req.headers.authorization;
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const wishlist = await prisma.wishlist.findUnique({
            where: {
                userId: user.id
            }
        });

        const wishlistItems = await prisma.wishlistItem.findMany({
            where: {
                wishlistId: wishlist.id
            }
        })
        res.json(wishlistItems);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding wishlist items'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/wishlistItem/

// ******************************************************************************************

// MAKE A NEW PRODUCT
router.post('/new', async (req, res) => {

    try {
        const { itemname, color, size, forkids, details, cost, img, category } = req.body;
        const newProduct = await prisma.wishlistItem.create({
            data: {
                itemname,
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

// POSTMAN "POST" ROUTE --> http://localhost:3000/nike/wishlistItem/new

// BODY TEXT FOR POSTMAN TO MAKE A NEW PRODUCT
// {
//     "id": 3,
//     "itemname": "watch",
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
        const wishlistItemId = parseInt(req.params.id);
        const { itemname, color, size, forkids, details, cost, img, category } = req.body;

        const updateItem = await prisma.wishlistItem.update({
            where: {id: parseInt(wishlistItemId)},
            data: {
                itemname,
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

// POSTMAN "PUT" ROUTE --> http://localhost:3000/nike/wishlistItem/1
// Change the "1" to the id number of the item you want to update

// BODY TEXT FOR POSTMAN TO MAKE AN UPDATE
// {
//     "itemname": "necklace",
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
        const wishlistItemId = parseInt(req.params.id);
        await prisma.wishlistItem.delete({
            where: {id: wishlistItemId}
        })
        return res.json({message: 'Product deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong deleting a product'});
    }
})

// POSTMAN "DELETE" ROUTE --> http://localhost:3000/nike/wishlistItem/1
// Change the "1" to the id number of the item you want to delete

module.exports = router;