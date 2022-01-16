const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose
.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to mongodb database");
})
.catch(err => {
    console.log("Error connecting to database " + err);
});

app.get("/hello-world", (req,res) => {
    res.send("Hello world");
});

app.listen(process.env.PORT, () => {
    console.log("Backend server has started " + process.env.PORT);
});

