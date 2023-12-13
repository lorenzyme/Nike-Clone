const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ******************************************************************************************

// GET ALL THE CARTS FOR SPECIFIC USER
router.get('/', async (req, res) => {

    try {
        const token = req.headers.authorization;
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const carts = await prisma.cart.findMany({
            where: {
                userId: user.id
            }
        });

        
        res.json(carts);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding your carts'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/cart

// ******************************************************************************************

// CLOSE A CART ON CHECKOUT
router.post('/checkout', async (req, res) => {

    try {
        const token = req.headers.authorization;
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const openCart = await prisma.cart.findUnique({
            where: {
                userId: user.id,
                status: 'OPEN'
            }
        });
         await openCart.update({
            data: {
                status: 'CLOSED'
            }
        })
        const newCart = await prisma.cart.create({
            data: {
                userId: user.id
            }
        })
        
        res.json(newCart);
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

// UPDATING AN EXISTING CART ITEM
// router.put('/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const { quantity } = req.body
//         const token = req.headers.authorization
//         const user = jwt.verify(token, process.env.JWT_SECRET_KEY)

//         const cart = await prisma.cart.findUnique({
//             where : {
//                 userId: user.id,
//             }
//         })
//         const updateCartItems = await prisma.cartItem.update({
//             where: {
//                 id,
//                 cartId: cart.id
//             },
//             data: {
//                 quantity
//             }
//         });
//        return  res.json(updateCartItems);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error: 'Something went wrong updating the cart item'});
//     }
// })

module.exports = router;