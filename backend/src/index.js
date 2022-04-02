require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/db");
const cors = require("cors");
const passport = require("./config/google-oauth");

const userControllers = require("./controllers/user.controllers");

const app = express();
app.use(express.json());
app.use(cors());


app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);


app.use("", userControllers);

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.listen(process.env.BACKEND_PORT, async () => {
    try {
        await connect();
        console.log('Sever runing on', process.env.BACKEND_PORT)
    } catch (e) {
        console.log(e.message);
    }
})

