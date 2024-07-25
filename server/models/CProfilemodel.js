const mongoose = require("mongoose");


    let CProfile = new mongoose.Schema(
        {
            name: String,
            email: {type:String, unique:true},
            mobile: String,
            address: String,
            village: String,
            city: String,
            adhaarNo: String,
            adhaarPic: String,
        },
        {
            versionKey: false,
        }
    )

    CProfileController = mongoose.model("Cprofile", CProfile);



module.exports={CProfileController};