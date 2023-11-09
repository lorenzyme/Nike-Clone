const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {


    try {

        const bottoms = await prisma.bottoms.findMany()
        const tops = await prisma.tops.findMany()
        const shoes = await prisma.shoes.findMany()
        const accessories = await prisma.accessories.findMany()
        // res.json(tops, bottoms, shoes, accessories);
        // res.json(tops);

        const products = {bottoms, tops, shoes, accessories};

        res.json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding all items'});
    }
})



module.exports = router;