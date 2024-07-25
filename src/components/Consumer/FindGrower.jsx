import React, { useEffect, useState } from 'react';
import "../../index.css";
import axios from "axios";
import Gcard from './GCard';

function FindGrower() {

    var [obj, setObj] = useState({

        category: "",
        items: "",
        city: ""
    })

    var [Cities, setCities] = useState([]);
    var [categoryItems, setcategoryItems] = useState([]);
    var [Growers, setGrowers] = useState([]);

    async function fetchCities(){

        setCities([]);

        const url = "http://localhost:3007/FindG/fetchCity";

        const cities = await axios.post(url,obj);

       // alert(JSON.stringify(cities));
       // alert(JSON.stringify(cities.data.cities));
        setCities(cities.data.cities);
    //    alert(JSON.stringify(Cities));


    }

    useEffect(()=>{


       fetchCities();


    },[obj.items]);

  

    function doUpdateItem(event)
    {
        
        var { name, value } = event.target;
        
        setObj({ ...obj, [name]: value });

    }

    

    function doUpdateCombo(event) {
        var { name, value } = event.target;


        setObj({ ...obj, [name]: value });

        if (value == "Milk Products") {
            setcategoryItems(["Milk", "Ghee", "Curd", "Buttermilk", "Butter", "Malai"]);
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
        else {
            setcategoryItems([]);
        }

    }

    async function doSearch()
    {
        const url = "http://localhost:3007/FindG/fetchGrower";
        const servermsg = await axios.post(url,obj);

        
        setGrowers(servermsg.data.rec);
        console.log(Growers);


    }

    

    return (
        <>
            <div class="min-h-screen p-6 bg-gradient-to-b from-blue-200 to-blue-100 flex items-center justify-center">
                <div class="container ">

                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6  ">
                        <div class="mt-3 space-y-12">
                            <div class="border-b border-gray-900/10 pb-12 relative mt-10 border-b border-slate-200 rounded-md grid  ">
                                <h1 class="text-lg font-bold leading-7 text-gray-900"><center>Find Growers</center></h1>

                                <div class="mt-10 grid  gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-2">
                                        <label for="Category" class="block text-sm font-medium leading-6 text-gray-900">Select Category</label>
                                        <div class="mt-2">
                                            <select name="category" value={obj.category} onChange={doUpdateCombo} id="" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" >
                                                <option value=""></option>
                                                <option value="Milk Products">Milk Products</option>
                                                <option value="Vegetables">Vegetables</option>
                                                <option value="Fruits">Fruits</option>
                                                <option value="Pulses">Pulses</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div class="sm:col-span-2">
                                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Select Item</label>
                                        <div class="mt-2">

                                            <select name="items" value={obj.items} onChange={doUpdateItem} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <option value="Select item">Select item</option>
                                                {categoryItems.map(item => (
                                                    <option key={item} value={item}>{item}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2 ">
                                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Select City</label>

                                        <div class="mt-2">
                                            <select name="city" onChange={doUpdateItem} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <option value="">Select City</option>
                                               {Cities.map(item => (
                                                    <option key={item} value={item}>{item}</option>
                                              ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-span-6 text-center">
                                        <input type="button" value="Search" onClick={doSearch} className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />
                                    </div>
                                
                          

                                 


 
                                </div>
       
                             
                                </div>
                         

                        </div>
                        <Gcard data={Growers}/>

                    </div ></div ></div>
                 
                  
        </>
    )

}
export default FindGrower;
