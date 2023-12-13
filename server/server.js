const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Gives access to the DB
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// For hashing password
const bcrypt = require('bcrypt');
// For tokens
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(bodyParser.json());

// Route imports for express router
app.use('/nike/users', require('./routes/users'));
app.use('/nike/products', require('./routes/products'));
app.use('/nike/wishlistItem', require('./routes/wishlistItems'));
app.use('/nike/cartItem', require('./routes/cartItems'));



// AUTH/TOKEN/HASHING
// ----------------------------------------------------------------------------------------------------------
// LOGIN
app.post('/auth/login', async (req, res, next) => {

    const { username, password } = req.body;

    try {

        // Find a user
        const user = await prisma.users.findUnique({
            where: {
                username,
            },
        });

        // If login button works, this should show the user logging in's details in the terminal which confirms the user exists (in the db)
        // console.log(user);

        // If user doesn't exist, throw error
        if (!user) {
            return res.status(409).send({ message: 'User not found' });
        }

        // Check passwords
        const isCorrectPassword = bcrypt.compareSync(password, user.password)

        // If password is correct it will log "true" in the terminal, if it isn't it's "false"
        // console.log(isCorrectPassword);

        // If password is correct, turns the user into a token and sends it to the client/frontend (successfully logged in)
        if (isCorrectPassword) {
            const token = jwt.sign(user, process.env.JWT_SECRET_KEY);
            res.send(token);
        } else {
            res.status(401).send({ message: 'Incorrect password' })
        };

    } catch (e) {
        next(e);
    };
});
// ----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------
// REGISTER
app.post('/auth/register', async (req, res, next) => {

    //destructuring
    const { username, password, email, name } = req.body;

    try {
        const user = await prisma.users.findUnique({
            where: {
                username,
            },
        });

        // console.log(user);  
        // ^ Shows if user is null or not after clicking register button (demo purposes)

        if (user) {
            return res.status(409).send({ message: "User already exists" });
        };

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = await prisma.users.create({
            data: {
                name,
                username,
                password: hashedPassword,
                email,
            },
        });
        const newWishlist = await prisma.wishlist.create({
            data: {
                userId: newUser.id
            }
        })
        const newCart = await prisma.cart.create({
            data: {
                userId: newUser.id
            }
        })
        console.log(newWishlist)
        const token = jwt.sign(newUser, process.env.JWT_SECRET_KEY)
        res.send(token);
        // console.log(newUser);
    } catch (e) {
        next(e);
    };
});
// ----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------
// TOKEN AUTH
app.get('/auth/me', async (req, res, next) => {

    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const wishlist = await prisma.wishlist.findUnique({
        where: {
            userId: user.id
        }
    })
    const wishlistItems = await prisma.wishlistItem.findMany({
        where: {
            wishlistId: wishlist.id
        }
    })
    const cart = await prisma.cart.findFirst({
        where: {
            userId: user.id,
            status: 'OPEN'
        }
    })
    console.log(cart)
    const cartItems = await prisma.cartItem.findMany({
        where: {
            cartId: cart.id
        }
    })

    res.send({
        user,
        wishlist: wishlistItems,
        carts: cartItems
    });
});
// ----------------------------------------------------------------------------------------------------------


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});