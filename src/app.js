require('dotenv/config');

const express = require('express');


const app = express();


// app.use('/', (req, res) => {
//     res.send("cscs")
// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)

})
