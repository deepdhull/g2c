const express = require("express");
const{doSave} = require("../controller/SignupController");

const app=express.Router();

app.post("/add-Usr",doSave);

module.exports=app;