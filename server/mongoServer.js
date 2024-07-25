const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dbObj = require("./config/dbConfig");
const GProfilerouter = require("./routers/GProfilerouter");
const RouterSignup = require("./routers/RouterSignup");
const RouterLogin = require("./routers/RouterLogin");
const RouterGAvail = require("./routers/RouterGAvail");
const FindGrower = require("./routers/FindGrower");
const CProfilerouter = require("./routers/CProfilerouter");
const path=require("path");
var fileUploader=require("express-fileupload");


const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("Uploads"));
app.use(fileUploader());
app.use(express.urlencoded(true));

app.listen(3007,()=>{
    console.log("Server Started at 3007");
})

const server=dbObj.dburl;
mongoose.connect(server).then(()=>{
    console.log("Badhaiiii");
}).catch(function(err){
    console.log(err);
})



 app.use("/GProfile",GProfilerouter);
 app.use("/CProfile",CProfilerouter);
 app.use("/Login",RouterLogin);
app.use("/Signup",RouterSignup);
app.use("/GAvail",RouterGAvail);
app.use("/FindG",FindGrower);