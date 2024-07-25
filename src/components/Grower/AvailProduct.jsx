import React, { useState } from 'react';
import "../../index.css";
import axios from "axios";

function AvailProduct() {
  // making the usestate obj
  var [obj, setObj] = useState({

    email: "",
    category: "",
    items: [],
    productPic: null,
  })

  var [categoryItems, setcategoryItems] = useState([])

  const [path, setprev] = useState("");
  const [hdn, sethdn] = useState("");
  const [flag, setFlag] = useState("");

 function doUpdate(event)
 {
  var { name, value } = event.target;

  setObj({ ...obj, [name]: value });

 }
  // i have named it picpath - but it is complete file object not just path
  function doUpdateCombo(event) {
    var { name, value } = event.target;

    if (obj[name] == "") {
      setObj({ ...obj, [name]: value });

      if (value == "Milk Products") {
        setcategoryItems(["Milk", "Ghee", "Curd", " Buttermilk", "Butter", "Malai"]);
      }
      else if (value == "Vegetables") {
        setcategoryItems(["Artichoke", "onion", "Spinach", "potato", "Tomato", "Yam", "Asparagus", "Carrot", "Cauliflower", "Celery", "Chayote", "Bamboo", "Bean", "GreenOnion", "Leek", "Lettuce", "Mushroom", "Onion", "Parsnip", "Beans", "Beetroot", "Pepper", "Potato", "Pumpkin", "Radicchio", "Radish", "BellPepper", "Broccoli", "BrusselsSprouts", "Cabbage", "Corn", "Cucumber", "Eggplant", "Endive", "Escarole", "Garlic", "GreenBeans", "Pea", "RedCabbage", "RedChiliPepper", "YellowSquash", "Zucchini"])
      }
      else if (value == "Fruits") {
        setcategoryItems(["Apple", "Apricot", "Avocado", "Banana", "Blueberry", "Cherry", "Coconut", "Grape", "Grapefruit", "Fig", "Kiwi", "Lemon", "Lime", "Mandarin", "Mango", "Melon", "Nectarine", "Orange", "Papaya", "PassionFruit", "Peach", "Pear", "Pineapple", "Plum", "Pomegranate", "Raspberry", "Strawberry", "Watermelon", "Blueberry", "Lychee", "Pomelo", "Jackfruit", "WaxApples", "Lychee", "Rambutan", "Durian", "AsianPear", "Mangosteen", "Longan", "Guava", "LotusFruit", "SugarApple", "ChineseBayberry", "Starfruit", "Pulasan", "Kumquat", "Breadfruit", "DragonFruit", "Santol", "Langsat", "Mango", "SnakeFruit", "JapanesePersimmon", "PassionFruit"])
      }
      else if (value == "Pulses") {
        setcategoryItems(["Chickpeas",
          "KabuliChana",
          "DesiChana",
          "Lentils",
          "MasoorDal",
          "MoongDal",
          "UradDal",
          "ToorDal",
          "ChanaDal",
          "Rajma",
          "ArharDal",
          "GreenGram",
          "GreenPeas",
          "YellowPeas",
          "Rajma",
          "Lobia",
          "BlackBeans",
          "MothBeans",
          "Chawli",
          "ValDal",
          "Soybeans",
          "WholeSoybeans",
          "SoybeanChunks"
        ])
      }
      else
      {
        setcategoryItems([]);
      }

    }
    else {
      alert("CLEAR FORM FIRST OR SAVE CURRENT ENTRY FIRST!!!");
    }


  }

  function doUpdatePic(event) {
    const file = event.target.files[0];
    setObj({ ...obj, ["productPic"]: file });
    setFlag("true");

    // Update the image preview
    const reader = new FileReader();
    reader.onload = function (e) {
      const previewImage = document.getElementsByName("preview")[0];
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  
  function doUpdateItems(event)
  {
    var { name, value } = event.target;
    if(obj[name]==[])
    {
      setObj({ ...obj, [name]: value });

    }
    else
    {
      setObj({...obj,["items"]:[...obj.items,event.target.value]});

    }

    

  }


  // if we  save with axios - input type button hi h obviously 
  // if we save with get - we need to pass the query string along with full url
  // if we save with post we need dont need to pass the query string just pass the usestate object 

  // HERE IM DOING IT WTH POST 

  // and if i want to save the image also - i need to make a formdata obj
  async function doAvail() {
    const url = "http://localhost:3007/GAvail/addProduct";

    var formdata = new FormData();
    for (var prop in obj) {
      formdata.append(prop, obj[prop]);
    }

    const serverMsg = await axios.post(url, formdata, { headers: { 'Content-Type': 'multipart/form-data' } });
    console.log(serverMsg)
    //alert(JSON.stringify(serverMsg));
    if (serverMsg.data.status == true)
      alert("Saved Successfullyyyyy");
    else
      alert(serverMsg.data.msg + "  " + serverMsg.data.err);
  }

  function doClear()
  {
    setObj({
      email: "",
      category: "",
      items: [],
      productPic: null,
    });
    setcategoryItems([]);
    setprev("");
    setFlag("");
  }


  return (
    <>
      <div className="bg-gradient-to-b from-blue-200 to-blue-100 h-screen flex justify-center items-center">
        <div className="bg-white mt-10 shadow-xl w-92  p-8 rounded-lg shadow-lg">
          <div class="mt-3">
            <div class=" border-b border-gray-900/10 pb-12 relative mt-2 border-b border-slate-200 rounded-md grid justify-items-center ...">
              <h1 class="text-lg font-bold leading-7 text-gray-900">Avail Products</h1>

              <div class="mt-10 grid  gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input name="email" type="email" value={obj.email} onChange={doUpdate} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>


                <div class="sm:col-span-3  sm:col-start-1">
                  <label for="Village" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                  <select name="category" value={obj.category} onChange={doUpdateCombo} id="" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" >
                    <option value=""></option>
                    <option value="Milk Products">Milk Products</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Pulses">Pulses</option>
                  </select>
                </div>

                <div class="sm:col-span-3  sm:col-start-1">
                  <label for="Category" class="block text-sm font-medium leading-6 text-gray-900">Category Items</label>
                 
                   <select name="items" value={obj.items} onChange={doUpdateItems} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option value="">Select item</option>
                  {categoryItems.map(item => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                </div>

                {/*                 
                <div class="sm:col-span-3 mt-0 mb-2  ">
                  <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Items</label>
                  <div class="mt-2">
                    <input type="text" onChange={doUpdate} value={obj.items} name="items" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div> */}

                <div class="sm:col-span-3">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Selected Items</label>
                  <div class="mt-2">
                    <input type="text" value={obj.items} name="items" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>


                <div class=" sm:col-span-3 mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">

                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span class=""><center>Upload Product Pic</center></span>
                        <input id="file-upload" name="productPic" onChange={doUpdatePic} type="file" class="sr-only" />
                      </label>

                    </div>
                    <p class="text-xs text-black">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    <div className="px-4 py-2 whitespace-wrap">
                      <img src={path} alt="Preview" name="preview" className="w-24 h-24" />
                    </div>
                  </div>
                </div>








                {/* 
                <div class="sm:col-span-2">
                  <label for="Id-Proof" class="block text-sm font-medium leading-6 text-gray-900">AdharPic</label>
                  <div class="mt-2">
                    <input type="file" onChange={doUpdatePic} name="picpath" id="" />


                    <img src={path} name="preview" alt="" width="100" class="form-label" height="100" />
                  </div>
                </div> */}


                <br />


              </div>
              <div>
              <input type="button" value="Submit" onClick={doAvail} className="mt-2 mr-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />
              <input type="button" value="Clear Form" onClick={doClear} className="mt-2 ml-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />

              </div>
             
            </div>

          </div>
        </div ></div >

    </>
  )

}
export default AvailProduct;