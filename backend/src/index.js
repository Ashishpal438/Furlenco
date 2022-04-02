require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const cors = require("cors");

const userControllers = require("./controllers/user.controllers");

const app = express();
app.use(express.json());
app.use(cors());

app.use("", userControllers);

app.listen(process.env.BACKEND_PORT, async () => {
    try {
        await connect();
        console.log('Sever runing on', process.env.BACKEND_PORT)
    } catch (e) {
        console.log(e.message);
    }
})

