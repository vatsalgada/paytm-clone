// backend/routes/account.js
const express = require('express');
const Account = require('../db/db')

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

module.exports = router;