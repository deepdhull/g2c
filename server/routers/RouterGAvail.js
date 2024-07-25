const express = require("express");
const{doAvail,doShow,doDel} = require("../controller/GProductController");

const app=express.Router();

app.post("/addProduct",doAvail);
app.post("/showProducts",doShow);
app.post("/doDelete",doDel);
module.exports=app;