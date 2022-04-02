require("dotenv").config();
const express = require("express");
const User = require("../models/user.models");
const router = express.Router();
const newToken = require("../config/jwt");


router.post("/signup", async (req, res) => {
    try {
        let user = await User.exists({ email: req.body.email });
        if (user) {
            return res.status(500).json("User exist here try another mail")
        }
        user = await User.create(req.body);
        let token = newToken(user);
        res.status(200).json({ token });
    } catch (e) {
        res.status(500).json(e.message);
    }
});

router.post("/login", async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(500).json("email wrong")
        }

        const matching =  user.checkPassword(req.body.password);
        if (!matching) {
            return res.status(500).json("password wrong")
        }
        let token = newToken(user);
        return res.status(200).json({ token });
    } catch (e) {
        res.status(500).json(e.message);
    }
});

module.exports = router;