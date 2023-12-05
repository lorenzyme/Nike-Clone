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
        const cart = await prisma.cart.findUnique({
            where: {
                userId: user.id
            }
        });

        const cartItems = await prisma.cartItem.findMany({
            where: {
                cartId: cart.id
            }
        })
        res.json(cartItems);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding wishlist items'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/wishlistItem/

// ******************************************************************************************

// CREATE A WISHLIST ITEM
router.post('/new', async (req, res) => {

    try {
        const { productId } = req.body
        const token = req.headers.authorization;
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const cart = await prisma.cart.findUnique({
            where: {
                userId: user.id
            }
        
        });
        const newCartItem = await prisma.cartItem.create({
            data: {
                productId,
                cartId: cart.id
            }
        });
        res.json(newCartItem);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong creating a new wishlist item'});
    }
})

// POSTMAN "POST" ROUTE --> http://localhost:3000/nike/wishlistItem/new

// BODY TEXT FOR POSTMAN TO MAKE A NEW CART ITEM
// {
//     "productId": 1
// }

// ******************************************************************************************

// DELETE A WISHLIST ITEM
router.delete('/:id', async (req, res) => {
    try {
        const token = req.headers.authorization
        const user = jwt.verify(token, proccess.env.JWT_SECRET_KEY)
        const cart = await prisma.cart.findUnique({
            where: {
                userId: user.id
            }
        })
        const cartId = parseInt(req.params.id);
        await prisma.cartItem.delete({
            where: {
                id: cartId,
                cartId: cart.id
            }

        });
        return res.json({message: 'Wishlist item deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong deleting a wishlist item'});
    }
})

// POSTMAN "DELETE" ROUTE --> http://localhost:3000/nike/wishlistItem/1
// Change the "1" to the id number of the item you want to delete

module.exports = router;