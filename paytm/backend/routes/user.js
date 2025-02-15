const express = require("express");
const { validateData } = require("../middlewares/validateData");
const { userRegistrationSchema } = require("../zodConfig");
import { StatusCodes } from 'http-status-codes';
import { User } from '../db';

const router = express.Router();

router.post("signup", validateData(userRegistrationSchema), (req, res) => {
    const { username, firstName, lastName, password } = req.body;
    // zod validation of inputs -- handled from the middleware
    // check if user already exists -- throw 411
    const userExists = User.find({ username });
    if(userExists) {
        res.status(StatusCodes.CONFLICT).json({
            error: "User with this username already exists, please Sign In!"
        });
        return;
    }
    // store in db
    const newUser = User({
        username, firstName, lastName
    });
    let hashedPassword = newUser.createHash(password);
    newUser.password = hashedPassword;
    // return the json web token
});

module.exports = router;