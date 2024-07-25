const express = require("express");
const {doSave, doFetchOne, doUpdate, doSearchfromProfile} = require("../controller/GprofileController");
const doValidateToken =  require("../auth/validate-token");
const validateTokenWithNext = require("../auth/validate-tokenNext");

const app=express.Router();

app.post("/add-G",validateTokenWithNext,doSave);
app.post("/show-G",doFetchOne);
app.post("/update-G",doUpdate);
app.post("/fetchGfromProfile", doSearchfromProfile)
app.post("/search-product-validatetoken", doValidateToken)
app.post("/search-product-validatetokenNext",validateTokenWithNext,doFetchOne);

module.exports=app;