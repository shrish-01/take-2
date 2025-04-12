const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken"); 
const { BankAccount } = require("../db");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const accountOfCurrentUser = await BankAccount.findOne({
        id: req.userId,
    });

    res.json({
        balance: accountOfCurrentUser.balance,
    })
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { to, amount } = req.body;

    const accountOfCurrentUser = await BankAccount.findOne({
        id: req.userId,
    }).session(session);

    if(!accountOfCurrentUser || accountOfCurrentUser.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient Balance",
        });
    }

    const toAccount = await BankAccount.findOne({
        id: to
    }).session(session);

    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid Account"
        });
    }

    // performing the transfer
    await BankAccount.updateOne({
        id: req.userId,
    }, {
        $inc: {
            balance: -amount,
        }
    }).session(session);

    await BankAccount.updateOne({
        id: to,
    }, {
        $inc: {
            balance: amount,
        }
    }).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer Successful!"
    });
});

module.exports = router;