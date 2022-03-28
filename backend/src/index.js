require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/db");
const cors = require("cors");

const electronicsControllers = require("./controllers/electronics.controllers");

const app = express();
app.use(express.json());
app.use(cors());

app.use("electronics", electronicsControllers);

app.listen(process.env.BACKEND_PORT, async () => {
    try {
        await connect();
        console.log('Sever runing on', process.env.BACKEND_PORT)
    } catch (e) {
        console.log(e.message);
    }
})

