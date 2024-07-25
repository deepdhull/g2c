const express = require("express");
const {doSave, doFetchOne, doUpdate, doSearchfromProfile} = require("../controller/CprofileController");
const doValidateToken =  require("../auth/validate-token");
const validateTokenWithNext = require("../auth/validate-tokenNext");

const app=express.Router();

app.post("/add-C",doSave);
app.post("/show-C",doFetchOne);
app.post("/update-C",doUpdate);
app.post("/fetchGfromProfile", doSearchfromProfile)
app.post("/search-product-validatetoken", doValidateToken)
app.post("/search-product-validatetokenNext",validateTokenWithNext,doFetchOne);

module.exports=app;