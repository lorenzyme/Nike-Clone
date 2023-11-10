const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ******************************************************************************************

// SEE/GET ALL THE ACCESSORIES
router.get('/', async (req, res) => {

    try {
        const accessories = await prisma.accessories.findMany()
        res.json(accessories);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding accessories'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/accessories/

// ******************************************************************************************

// MAKE A NEW ACCESSORY
router.post('/new', async (req, res) => {

    try {
        const { id, itemname, color, size, forkids, details, cost, img } = req.body;
        const newAccessories = await prisma.accessories.create({
            data: {
                id,
                itemname,
                color,
                size,
                forkids,
                details,
                cost,
                img
            }
        })
        res.json(newAccessories);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong creating a new accessory'});
    }
})

// POSTMAN "POST" ROUTE --> http://localhost:3000/nike/accessories/new

// BODY TEXT FOR POSTMAN TO MAKE A NEW ACCESSORY
// {
//     "id": 3,
//     "itemname": "watch",
//     "color": "gold",
//     "size": "big"
//     "forkids": false,
//     "details": "some content",
//     "cost": 5.70,
//     "img": "put url here"
// }

// ******************************************************************************************

// UPDATE AN EXISTING ACCESSORY
router.put('/:id', async (req, res) => {
    try {
        const accessoriesId = parseInt(req.params.id);
        const { id, itemname, color, size, forkids, details, cost, img } = req.body;

        const updateItem = await prisma.accessories.update({
            where: {id: parseInt(accessoriesId)},
            data: {
                id,
                itemname,
                color,
                size,
                forkids,
                details,
                cost,
                img
            }
        });
       return  res.json(updateItem);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong updating an accessory'});
    }
})

// POSTMAN "PUT" ROUTE --> http://localhost:3000/nike/accessories/1
// Change the "1" to the id number of the item you want to update

// BODY TEXT FOR POSTMAN TO MAKE AN UPDATE
// {
//     "id": 4
//     "itemname": "necklace",
//     "color": "silver",
//     "size": "28 inch",
//     "forkids": false,
//     "details": "some content",
//     "cost": 5.70,
//     "img": "put url here"
// }

// ******************************************************************************************

// DELETE A ACCESSORY
router.delete('/:id', async (req, res) => {
    try {
        const accessoriesId = parseInt(req.params.id);
        await prisma.accessories.delete({
            where: {id: accessoriesId}
        })
        return res.json({message: 'Accessory deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong deleting an accessory'});
    }
})

// POSTMAN "DELETE" ROUTE --> http://localhost:3000/nike/accessories/1
// Change the "1" to the id number of the item you want to delete

module.exports = router;