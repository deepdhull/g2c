const { GProductController } = require("../models/Gproductmodel");
const { GProfileController } = require("../models/GProfilemodel");
const path = require("path");
const axios = require("axios");

async function doAvail(req, resp) {

  console.log(req.body);

  let filename = "nopic.jpg";

  console.log(req.files);
  console.log("---");

  console.log(req.body);

  if (req.files != null) {
    filename = req.files.productPic.name;
    var filepath = path.join(__dirname, "..", "Uploads", filename);
    req.files.productPic.mv(filepath);
    console.log(filename)
    console.log("hnjiii");
  }
  req.body.productPic = filename;

  console.log(req.body);



  /* await GProductController.findOne({ email: req.body.email, category: req.body.category })
   .then((result) => {
     if(result)
     {
       var itm = result.items+","+req.body.items;
       GProductController.updateOne({_id:result._id},{$set:{email:req.body.email, category:req.body.category, items:itm, productPic: req.body.productPic }})
       .then(function (result) {
           if(result.matchedCount==1)
           resp.json({status:true,msg:"Updated"});
           else
           resp.json({status:true,msg:"Invalid Item"});  
         })
         .catch(function () {
           resp.json({ err: "error" });
         });
       console.log("")
     }
     else
     {
       const doc=new GProductController(req.body);
       doc.save().then((retDoc)=>{
               resp.set("json");
               resp.json({status:true, rec:retDoc});//retDoc is an object
       }).catch((err)=>{
           resp.json({status:false,msg:"Duplicate Entry Haiiiii Oe",err:err.message,req:req.body});//retDoc is an object
       }) 
     }

   })
   .catch((err) => {
       console.error(err);
       resp.json({ status: false, message: "Error occurred" });
   });
  
}*/

 await GProfileController.findOne({email: req.body.email}).then((result)=>{
    if(result)
    {
      var city = result.city;
      req.body.city=city;
         // Split the items string into an array
         const itemsArray = req.body.items.split(',').map(item => item.trim());

         // Update req.body.items with the array
         req.body.items = itemsArray;
   
      const doc = new GProductController(req.body);
      doc.save().then((retDoc) => {
        resp.set("json");
        resp.json({ status: true, rec: retDoc });//retDoc is an object
      }).catch((err) => {
        resp.json({ status: false, msg: "Duplicate Entry Haiiiii Oe", err: err.message, req: req.body });//retDoc is an object
      })
    
    }
    else
    {
        resp.json({status: false, msg: "fill profile form first"});
    }
 }).catch((err)=>{
   resp.json({status: false});
 })

 

}


function doShow(req, res) {
  GProductController.find({ email: req.body.email })
    .then(function (result) {
      console.log(JSON.stringify(result));
      res.json({ status: true, res: result });
    })
    .catch(function () {
      res.json({ err: "error" });
    });

}

function doDel(req, res) {
  res.set("json");

  GProductController.deleteOne({ email: req.body.email, items: req.body.items }).then((result) => {
    if (result.deletedCount == 1)
      res.json({ status: true, rec: result, msg: "Deleted" });
    else
      res.json({ status: true, rec: result, msg: "Invalid Item" })

  }).catch(function () {
    res.json({ err: "error", msg: "Invalid Item" });
  });
}


module.exports = { doAvail, doShow, doDel };