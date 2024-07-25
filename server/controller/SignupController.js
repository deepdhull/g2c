const {UserController} = require("../models/UsersModel");
const path=require("path");

function doSave(req,resp)
{
   
    console.log(req.body);
    const doc=new UserController(req.body);
    doc.save().then((retDoc)=>{
            resp.set("json");
            resp.json({status:true, rec:retDoc});//retDoc is an object
    }).catch((err)=>{
        resp.json({status:false,msg:"Duplicate Entry Haiiiii Oe",err:err.message,req:req.body});//retDoc is an object
    }) 
}

module.exports = {doSave};