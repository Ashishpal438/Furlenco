const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(process.env.MONGOOSE_DB_URL);
}

module.exports = connect;