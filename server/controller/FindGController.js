const {GProductController} = require("../models/Gproductmodel"); 
const {GProfileController} = require("../models/GProfilemodel");

function doFetchCity(req, resp)
{
    const {category,items} = req.body;
 
    console.log(category+" "+items);
    // const categoryRegex = new RegExp(category, 'i'); //The RegExp constructor is a built-in JavaScript object that creates a regular expression object for matching text with a pattern.
    // const itemArray = [items];
    GProductController.find({
        category: category,
        items:items  // Searching for items that contain the provided item
    })
    .distinct('city') // To get distinct cities
    .then(cities => {
        // Returning the list of cities
        console.log(cities);
        resp.json({ cities });
    })
    .catch(err => {
        resp.json({ error: err.message });
    });


}

function doFetchg(req,resp)
{
   const {category, items, city} = req.body;
     
   GProductController.find({
    // category: category,
    // items: [items],
    // city: city
    $and:[{category:category},{items:{$in:[items]}},{city:city}]
   }).then((retDoc)=>{
    console.log(retDoc);
        resp.set("json");
        resp.json({status:true, rec:retDoc});
     }).catch((err)=>{
        resp.json({err: err.message});
     });

}


  
module.exports={doFetchCity, doFetchg};