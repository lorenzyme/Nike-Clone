const jwt = require('jsonwebtoken');

//Gives you access to the DB
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());


// ----------------------------------------------------------------------------------------------------------
// LOGIN
app.post('/auth/login', async (req, res, next) => {

    const { username, password } = req.body;

    try {

        // Find a user
        const user = await prisma.accounts.findUnique({
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
    const { username, password } = req.body;

    try {
        const user = await prisma.accounts.findUnique({
            where: {
                username,
            },
        });

        // console.log(user);  
        // ^ Shows if user is null or not after clicking register button (demo purposes)

        if (user) {
            return res.status(409).send({ message: "User already exists" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        // Comment out "newUser" if you want to demo this and see what the hashedPassword looks like
        // console.log(hashedPassword);

        const newUser = await prisma.accounts.create({
            data: {
                username,
                password: hashedPassword,
            },
        });

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

    res.send(user);

});
// ----------------------------------------------------------------------------------------------------------


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});