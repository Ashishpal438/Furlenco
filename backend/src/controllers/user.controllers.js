require("dotenv").config();
const express = require("express");
const User = require("../models/user.models");
const router = express.Router();
const passport = require("../config/google-oauth");
const newToken = require("../config/jwt");
const authenticate = require("../middlewares/authenticate.middleware");

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
        console.log(User.findOne());
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



router.get("/login/failure", (req, res) => {
  return res.status(400).send("Authentication failed!");
});

router.get("/login/check", authenticate, async (req, res) => {
  if (!req.user) {
    return res.status(400).send("Authentication failed!");
  }
  const { email } = req.user;
  const user = await User.findOne({ where: { email } });
  let token = newToken(user);
  return res.status(200).send({ token, user });
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.status(200).json({ message: "Logged out!" });
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "auth/login/failure",
  })
);
module.exports = router;