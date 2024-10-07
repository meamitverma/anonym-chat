const dotenv = require('dotenv');
const express = require('express');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.status(200).json({"msg" : "working"});
})

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});