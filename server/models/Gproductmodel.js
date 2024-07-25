const mongoose = require("mongoose");
let Gproduct = new mongoose.Schema(
    {
        email: String,
        category: String,
        items: [String],
        city: String,
        productPic: String,
    },
    {
        versionKey: false,
    }
)

const GProductController = mongoose.model("GAvailProductes", Gproduct);


module.exports = { GProductController };