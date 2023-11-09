const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Gives access to the DB
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// For hashing password
const bcrypt = require('bcrypt');

// app.use(cors());
app.use(bodyParser.json());

// Route imports for express router
app.use('/nike/accessories', require('./routes/accessories'));
app.use('/nike/tops', require('./routes/tops'));
app.use('/nike/bottoms', require('./routes/bottoms'));
app.use('/nike/shoes', require('./routes/shoes'));
app.use('/nike/users', require('./routes/users'));
app.use('/nike/getAll', require('./routes/getAll'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});