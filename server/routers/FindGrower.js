const express = require("express");
const {doFetchCity, doFetchg} = require("../controller/FindGController");
const app=express.Router();

app.post("/fetchCity",doFetchCity);
app.post("/fetchGrower",doFetchg);


module.exports=app;