const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const favoriteUser = require("./routes/favoriteUser");
const task = require("./routes/task");

mongoose.connect("mongodb://localhost:27017/pplFinder").then(() => {
    console.log("connected to mongoDB");
}).catch(er => { console.log(er) });

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.use("/favoriteUsers", favoriteUser);
app.use("/tasks", task);


app.listen(5000, () => {
    console.log("listening on port 5000");
})
