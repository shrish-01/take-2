const express = require("express");
const { validateData } = require("../middlewares/validateData");
const { userRegistrationSchema, userSignInSchema } = require("../zodConfig");
const { StatusCodes } = require('http-status-codes');
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const router = express.Router();

router.post("/signup", validateData(userRegistrationSchema), async (req, res) => {
    const { username, firstName, lastName, password } = req.body;
    // zod validation of inputs -- handled from the middleware
    // check if user already exists -- throw 411
    const userExists = await User.findOne({ username });
    // console.log(userExists);
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
    let hashedPassword = await newUser.createHash(password);
    newUser.password = hashedPassword;
    await newUser.save();

    // return the json web token

    const token = jwt.sign({
        username: username
    }, JWT_SECRET);
    
    res.status(StatusCodes.ACCEPTED).json({
        message: "User created succesfully!",
        token: token
    });
});

router.post("/signin", validateData(userSignInSchema), async (req, res) => {
    const { username, password } = req.body;

    const userExists = await User.findOne({ username });
    if(!userExists) {
        res.status(StatusCodes.NOT_FOUND).json({
            message: "User not registered, please do Sign Up!"
        });
    } else {
        // console.log(password);
        if(await userExists.validatePassword(password)) {
            const token = jwt.sign({
                username: username,
            }, JWT_SECRET);

            res.status(StatusCodes.ACCEPTED).json({
                message: "User signed in!",
                token: token,
            });
        } else {
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: "Incorrect password, please do recheck your password!"
            })
        }
    }
});

module.exports = router;