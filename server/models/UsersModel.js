const mongoose = require("mongoose");
 let User = new mongoose.Schema(
        {
            email: {type:String, unique:true},
            password: String,
            type: String
        },
        {
            versionKey : false,
        }
    )

    const UserController = mongoose.model("Users",User);
  

module.exports={UserController};