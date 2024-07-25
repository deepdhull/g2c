const mongoose = require("mongoose");


    let Otpmodel = new mongoose.Schema(
        {
            email: {type:String},
            code: String,
            expireIn: Number
        },
        {
            timestamps: true,
        }
    )

    OtpController = mongoose.model("OtpmodelF", Otpmodel);



module.exports={OtpController};