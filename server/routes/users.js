const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ******************************************************************************************

// SEE/GET ALL USERS
router.get('/', async (req, res) => {

    try {
        const users = await prisma.users.findMany()
        res.json(users);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong finding users'});
    }
})

// POSTMAN "GET" ROUTE --> http://localhost:3000/nike/users/

// ******************************************************************************************

// MAKE A NEW USER
router.post('/new', async (req, res) => {

    try {
        const { name, username, password, email } = req.body;
        const newUser = await prisma.users.create({
            data: {
                name,
                username,
                password,
                email
            }
        })
       
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong creating a new user'});
    }
})

// POSTMAN "POST" ROUTE --> http://localhost:3000/nike/users/new

// BODY TEXT FOR POSTMAN TO MAKE AN UPDATE
// {
//     "name": "Tyler",
//     "username": "Tyler15"
//     "password": "tyler123",
//     "email": "tyler@gmail.com"
// }

// ******************************************************************************************

// UPDATE AN EXISTING USER
router.put('/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const { name, username, password, email } = req.body;

        const updateUser = await prisma.users.update({
            where: {id: parseInt(userId)},
            data: {
                name,
                username,
                password,
                email
            }
        });
       return  res.json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong updating a user'});
    }
})

// POSTMAN "PUT" ROUTE --> http://localhost:3000/nike/users/1
// Change the "1" to the id number of the item you want to update

// BODY TEXT FOR POSTMAN TO MAKE AN UPDATE
// {
//     "name": "Tyler",
//     "username": "Tyler15"
//     "password": "tyler123",
//     "email": "tyler@gmail.com"
// }

// ******************************************************************************************

// DELETE A USER
router.delete('/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        await prisma.users.delete({
            where: {id: userId}
        })
        return res.json({message: 'User deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Something went wrong deleting a user'});
    }
})

// POSTMAN "DELETE" ROUTE --> http://localhost:3000/nike/users/1
// Change the "1" to the id number of the item you want to delete

module.exports = router;