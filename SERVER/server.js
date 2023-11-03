const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route imports for express router
app.use('/nike/accessories', require('./routes/accessories'));
app.use('/nike/tops', require('./routes/tops'));
app.use('/nike/bottoms', require('./routes/bottoms'));
app.use('/nike/shoes', require('./routes/shoes'));
app.use('/nike/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});