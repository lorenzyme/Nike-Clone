const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// SEE/GET ALL THE PRODUCTS IN THE STORE
router.get('/', async (req, res) => {

    try {

        const bottoms = await prisma.bottoms.findMany()
        const tops = await prisma.tops.findMany()
        const shoes = await prisma.shoes.findMany()
        const accessories = await prisma.accessories.findMany()

        const products = {bottoms, tops, shoes, accessories};
        console.log(products)
        res.json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding all items'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/getAll/


module.exports = router;