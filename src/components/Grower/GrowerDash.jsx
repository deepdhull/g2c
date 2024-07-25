import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import "../../index.css";
import ProfileG from './ProfileG';
import AvailProduct from './AvailProduct';
import ItemsManager from './ItemsManager';

function GrowerDash()
{
    // console.log("growerddash");
    // alert("hi");
     var navigate=useNavigate();
    // var parms= useParams();
    function openProfile()
    {
        navigate("/profile")
    }
    function openAvail()
    {
        navigate("/avail")
    }
    function openProducts()
    {
        navigate("/prod")
    }
    return(
      <div className="flex  flex-col h-screen">
  
    <div class="flex-grow flex justify-center items-center ">
      
        <div class="w-full max-w-xs mx-2 relative group bg-gray-900  py-12 sm:py-24 px-6  flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
          <img class="w-32 h-32 object-cover object-center " src="photos/profile_2274420.png" alt="art" />
          <h4 class="text-white text-2xl font-bold capitalize text-center">Profile</h4>
          <input type="button" value="Profile" onClick={openProfile} className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />

        </div>
        <div class="w-full max-w-xs mx-2 relative group bg-gray-900  py-12 sm:py-24 px-6  flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
          <img class="w-32 h-32 object-cover object-center " src="photos/groceries.png" alt="art" />
          <h4 class="text-white text-2xl font-bold capitalize text-center">Avail Products</h4>
          <input type="button" value="Avail " onClick={openAvail} className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />

        </div>
        <div class="w-full max-w-xs mx-2 relative group bg-gray-900  py-12 sm:py-24 px-6  flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
          <img class="w-32 h-32 object-cover object-center " src="photos/procurement.png" alt="art" />
          <h4 class="text-white text-2xl font-bold capitalize text-center">Manage Products</h4>
          <input type="button" value="Manage" onClick={openProducts} className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />

        </div>
       
    </div></div>

  
    )
}
export default GrowerDash;