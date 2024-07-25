const express = require("express");
const{doLogin, dogetOtp, verifyOTP, changePass} = require("../controller/LoginController");

const app=express.Router();

app.post("/doLogin",doLogin);
app.post("/getOtp",dogetOtp);
app.post("/verify",verifyOTP);
app.post("/updatePass",changePass);

module.exports=app;