const mongoose = require("mongoose");

const electronicsSchema = new mongoose.Schema(

);

const Electronics = mongoose.model("electronics", electronicsSchema);

module.exports = Electronics;