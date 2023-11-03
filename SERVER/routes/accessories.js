const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// SEE ALL THE AUTHORS
router.get('/', async (req, res) => {

    try {
        const accessories = await prisma.accessories.findMany()
        res.json(accessories);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding accessories'});
    }
})



router.post('/new', async (req, res) => {

    try {
        const { itemname, color, size } = req.body;
        const newAccessories = await prisma.accessories.create({
            data: {
                itemname,
                color,
                size
            }
        })
        res.json(newAccessories);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong creating a new accessories'});
    }
})


module.exports = router;