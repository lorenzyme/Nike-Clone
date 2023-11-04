const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ******************************************************************************************

// SEE/GET ALL THE SHOES
router.get('/', async (req, res) => {

    try {
        const shoes = await prisma.shoes.findMany()
        res.json(shoes);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding shoes'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/shoes/

// ******************************************************************************************

// MAKE A NEW SHOE
router.post('/new', async (req, res) => {

    try {
        const { itemname, color, size, gender, forkids } = req.body;
        const newShoes = await prisma.shoes.create({
            data: {
                itemname,
                color,
                size,
                gender,
                forkids
            }
        })
        res.json(newShoes);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong creating a new shoes entry'});
    }
})

// POSTMAN "POST" ROUTE --> http://localhost:3000/nike/shoes/new

// BODY TEXT FOR POSTMAN TO MAKE A NEW SHOE ENTRY
// {
//     "id": "1",
//     "itemname": "AF11",
//     "color": "white",
//     "size": "11",
//     "gender": "male",
//     "forkids": "false"
// }

// ******************************************************************************************

// UPDATE AN EXISTING ACCESSORY
router.put('/:id', async (req, res) => {
    try {
        const shoesId = parseInt(req.params.id);
        const { itemname, color, size, gender, forkids } = req.body;

        const updateShoes = await prisma.shoes.update({
            where: {id: parseInt(shoesId)},
            data: {
                itemname,
                color,
                size,
                gender,
                forkids
            }
        });
       return  res.json(updateShoes);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong updating shoes'});
    }
})

// POSTMAN "PUT" ROUTE --> http://localhost:3000/nike/shoes/1
// Change the "1" to the id number of the item you want to update

// BODY TEXT FOR POSTMAN TO MAKE AN UPDATE
// {

//     "itemname": "AF11",
//     "color": "white",
//     "size": "11",
//     "gender": "male",
//     "forkids": "false"
// }

// ******************************************************************************************

// DELETE A SHOE
router.delete('/:id', async (req, res) => {
    try {
        const shoesId = parseInt(req.params.id);
        await prisma.shoes.delete({
            where: {id: shoesId}
        })
        return res.json({message: 'Shoes deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong deleting a shoe entry'});
    }
})

// POSTMAN "DELETE" ROUTE --> http://localhost:3000/nike/shoes/1
// Change the "1" to the id number of the item you want to delete

module.exports = router;