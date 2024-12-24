// mongodb-project-name: template-db-config
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
});

const User = mongoose.model('user', userSchema);

/** A way to save users */
const userNew = new User({
    name: "Jimmy Arthur",
    username: "jimmy.a@gmail.com",
    password: "123"
});
userNew.save();

app.listen(3000);

