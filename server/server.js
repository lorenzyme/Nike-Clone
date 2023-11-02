const express = require("express");

const cors = require("cors");

const app = express();

PORT = 3000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
