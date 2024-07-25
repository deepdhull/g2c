const {CProfileController} = require("../models/CProfilemodel");
const path=require("path");


function doSave(req,resp)
{
    let filename="nopic.jpg";

    console.log(req.files);
    console.log("---");
    
    console.log(req.body);

    if(req.files!=null)
    {
        filename=req.files.adhaarPic.name;
        var filepath=path.join(__dirname,"..","Uploads",filename);
        req.files.adhaarPic.mv(filepath);
        console.log(filename)
        console.log("hnjiii");
    }
        req.body.adhaarPic=filename;

    console.log(req.body);
    const doc=new CProfileController(req.body);
    doc.save().then((retDoc)=>{
            resp.set("json");
            resp.json({status:true, rec:retDoc});//retDoc is an object
    }).catch((err)=>{
        resp.json({status:false,msg:"Duplicate Entry Haiiiii Oe",err:err.message,req:req.body});//retDoc is an object
    }) 
}

function doFetchOne(req, res) {
   
    console.log(req.body);
    res.set("json");
    
  
    CProfileController.find({email : req.body.email})
      .then(function (result) {
        console.log(JSON.stringify(result));
        res.json({status:true, res:result});
      })
      .catch(function () {
        res.json({ err: "error" });
      });
  }

  function doUpdate(req, res) {
   
    console.log(req.body.adhaarPic);
    
    res.set("json");
    let filename="nopic.jpg";
    if(req.files!=null)
    {
        filename=req.files.adhaarPic.name;
        var filepath=path.join(__dirname,"..","Uploads",filename);
        req.files.adhaarPic.mv(filepath);
        console.log(filename)
        console.log("hnjiii");
    }
    else
    {
      if(req.body.adhaarPic!="")
      {
        filename = req.body.adhaarPic;
      }
    }
        req.body.adhaarPic=filename;

    CProfileController.updateOne({email:req.body.email},{$set:{name:req.body.name, mobile:req.body.mobile, address:req.body.address, city:req.body.city, village:req.body.village,adhaarNo:req.body.adhaarNo, adhaarPic:req.body.adhaarPic}}) 
      .then(function (result) {
        if(result.matchedCount==1)
        res.json({status:true,msg:"Updated"});
        else
        res.json({status:true,msg:"Invalid Item"});  
      })
      .catch(function () {
        res.json({ err: "error" });
      });
  }

  function doSearchfromProfile(req, res) {
    res.set("json");
    console.log(req.body.email);
  
    CProfileController.find({email:req.body.email})
    .then(function (result) {
      res.send(result);
    })
    .catch(function () {
      res.send({ err: "error" });
    })
  }



  module.exports={doSave, doFetchOne, doUpdate,doSearchfromProfile };