const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ******************************************************************************************

// SEE/GET ALL THE BOTTOMS
router.get('/', async (req, res) => {

    try {
        const bottoms = await prisma.bottoms.findMany()
        res.json(bottoms);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding bottoms'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/bottoms/

// ******************************************************************************************

// MAKE A NEW ACCESSORY
router.post('/new', async (req, res) => {

    try {
        const { id, name, color, size, gender, forkids, details, cost, img } = req.body;
        const newBottoms = await prisma.bottoms.create({
            data: {
                id,
                name,
                color,
                size,
                gender,
                forkids,
                details,
                cost,
                img
            }
        })
        res.json(newBottoms);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong creating new bottoms'});
    }
})

// POSTMAN "POST" ROUTE --> http://localhost:3000/nike/bottoms/new

// BODY TEXT FOR POSTMAN TO MAKE NEW BOTTOMS
// {
//     "id": "1",
//     "name": "joggers",
//     "color": "black",
//     "size": "34",
//     "gender": "male",
//     "forkids": false,
//     "details": "some content",
//     "cost": 5.70
//     "img": "put url here"
// }

// ******************************************************************************************

// UPDATE EXISTING BOTTOMS
router.put('/:id', async (req, res) => {
    try {
        const bottomsId = parseInt(req.params.id);
        const { id, name, color, size, gender, forkids, details, cost, img } = req.body;

        const updateBottoms = await prisma.bottoms.update({
            where: {id: parseInt(bottomsId)},
            data: {
                id,
                name,
                color,
                size,
                gender,
                forkids,
                details,
                cost,
                img
            }
        });
       return  res.json(updateBottoms);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong updating bottoms'});
    }
})

// POSTMAN "PUT" ROUTE --> http://localhost:3000/nike/bottoms/1
// Change the "1" to the id number of the item you want to update

// BODY TEXT FOR POSTMAN TO MAKE AN UPDATE
// {
//     "id": "1",
//     "name": "joggers",
//     "color": "black",
//     "size": "34",
//     "gender": "male",
//     "forkids": false,
//     "details": "some content",
//     "cost": 5.70
//     "img": "put url here"
// }

// ******************************************************************************************

// DELETE BOTTOMS
router.delete('/:id', async (req, res) => {
    try {
        const bottomsId = parseInt(req.params.id);
        await prisma.bottoms.delete({
            where: {id: bottomsId}
        })
        return res.json({message: 'Bottoms deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong deleting bottoms'});
    }
})

// POSTMAN "DELETE" ROUTE --> http://localhost:3000/nike/bottoms/1
// Change the "1" to the id number of the item you want to delete

module.exports = router;