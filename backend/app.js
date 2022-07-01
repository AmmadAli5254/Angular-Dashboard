const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const routes = require('./routes/userRoute')


const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

mongoose.connect("mongodb://localhost:27017", (err, client) => {
    err ? console.log(err) : console.log("DB Connented!")
});

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})