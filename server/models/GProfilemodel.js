const mongoose = require("mongoose");


    let GProfile = new mongoose.Schema(
        {
            name: String,
            email: {type:String, unique:true},
            mobile: String,
            address: String,
            village: String,
            city: String,
            category: String,
            adhaarNo: String,
            adhaarPic: String,
        },
        {
            versionKey: false,
        }
    )

    GProfileController = mongoose.model("Gprofile", GProfile);



module.exports={GProfileController};