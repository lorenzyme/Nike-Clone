const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ******************************************************************************************

// GET ALL THE CART ITEMS FOR SPECIFIC USER
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
                cartId: cart.id,
            }
        })
        res.json(cartItems);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding cart items'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/cartItem/

// ******************************************************************************************

// CREATE A CART ITEM
router.post('/new', async (req, res) => {
    try {
        const { productId, quantity } = req.body
        const token = req.headers.authorization;
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const cart = await prisma.cart.findFirst({
            where: {
                userId: user.id,
                status: "OPEN"
            }
        });
        const newCartItem = await prisma.cartItem.create({
            data: {
                productId: productId.id,
                cartId: cart.id,
                quantity
            }
        });
        res.json(newCartItem);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong creating a new cart item'});
    }
})


// POSTMAN "POST" ROUTE --> http://localhost:3000/nike/cartItem/new

// BODY TEXT FOR POSTMAN TO MAKE A NEW CART ITEM
// {
//     "productId": 1
// }

// ******************************************************************************************

// UPDATING AN EXISTING CART ITEM
// router.put('/:id', async (req, res) => {
//     try {
//         const  productId  = parseInt(req.params.id)
//         const { quantity, } = req.body
//         const token = req.headers.authorization
//         const user = jwt.verify(token, process.env.JWT_SECRET_KEY)

//         const cart = await prisma.cart.findFirst({
//             where : {
//                 userId: user.id,
//                 status: "OPEN"
//             }
//         })
//         const cartItem = await prisma.cartItem.findMany({
//             where: {
//                 id,
//                 cartId: cart.id
//             }
//         })
//         const updateCartItems = await prisma.cartItem.updateMany({
//             where: {
//                 id,
//                 cartId: cart.id,
//             },
//             data: {
//                 quantity: productId
//             }
//         }); 
//         console.log(cartItem.quantity)
//        return  res.json(updateCartItems);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error: 'Something went wrong updating the cart item'});
//     }
// })
// ******************************************************************************************

// DELETE A CART ITEM
router.delete('/:id', async (req, res) => {
    try {
        const token = req.headers.authorization
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
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
        return res.json({message: 'Cart item deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong deleting a cart item'});
    }
})

// POSTMAN "DELETE" ROUTE --> http://localhost:3000/nike/cartItem/1
// Change the "1" to the id number of the item you want to delete

module.exports = router;