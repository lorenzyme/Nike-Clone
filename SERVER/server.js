const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use('/nike/accessories', require('./routes/accessories'));



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});