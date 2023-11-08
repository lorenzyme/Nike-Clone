const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ******************************************************************************************

// SEE/GET ALL THE TOPS
router.get('/', async (req, res) => {

    try {
        const tops = await prisma.tops.findMany()
        res.json(tops);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding tops'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/tops/

// ******************************************************************************************

// MAKE A NEW TOPS ENTRY
router.post('/new', async (req, res) => {

    try {
        const { itemname, color, size, gender, forkids, details, cost } = req.body;
        const newTops = await prisma.tops.create({
            data: {
                itemname,
                color,
                size,
                gender,
                forkids,
                details,
                cost
            }
        })
        res.json(newTops);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong creating new tops'});
    }
})

// POSTMAN "POST" ROUTE --> http://localhost:3000/nike/tops/new

// BODY TEXT FOR POSTMAN TO MAKE A NEW TOPS ENTRY
// {
//     "id": "1",
//     "itemname": "tshirt",
//     "color": "white",
//     "size": "medium",
//     "gender": "male",
//     "forkids": false,
//     "details": "some content",
//     "cost": 5.70
// }

// ******************************************************************************************

// UPDATE AN EXISTING TOPS ENTRY
router.put('/:id', async (req, res) => {
    try {
        const topsId = parseInt(req.params.id);
        const { itemname, color, size, gender, forkids, details, cost } = req.body;

        const updateTops = await prisma.tops.update({
            where: {id: parseInt(topsId)},
            data: {
                itemname,
                color,
                size,
                gender,
                forkids,
                details,
                cost
            }
        });
       return  res.json(updateTops);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong updating tops'});
    }
})

// POSTMAN "PUT" ROUTE --> http://localhost:3000/nike/tops/1
// Change the "1" to the id number of the item you want to update

// BODY TEXT FOR POSTMAN TO MAKE AN UPDATE
// {
//     "itemname": "tshirt",
//     "color": "white",
//     "size": "medium",
//     "gender": "male",
//     "forkids": false,
//     "details": "some content",
//     "cost": 5.70
// }

// ******************************************************************************************

// DELETE A TOPS ENTRY
router.delete('/:id', async (req, res) => {
    try {
        const topsId = parseInt(req.params.id);
        await prisma.tops.delete({
            where: {id: topsId}
        })
        return res.json({message: 'Tops deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong deleting a tops entry'});
    }
})

// POSTMAN "DELETE" ROUTE --> http://localhost:3000/nike/tops/1
// Change the "1" to the id number of the item you want to delete

module.exports = router;