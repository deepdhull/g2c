import { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";

import React from 'react';

function Modal({ isVisible, onClose, data }) {
   
  if (!isVisible) {
    return null;
  }


  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex items-center justify-center">
      <div
        className="relative p-8 bg-gradient-to-b from-blue-200 to-blue-100 w-full max-w-2xl h-auto m-auto flex-col flex rounded-lg shadow-lg"
        style={{ border: '2px solid blue', boxShadow: '0 0 15px rgba(0, 0, 255, 0.5)' }}
      >
        <span className="absolute top-0 right-0 p-4">
          <button onClick={onClose} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
        <h1 className="text-xl font-semibold mb-4 text-center">Grower Information</h1>
        {data.map((obj) => (
          <div className="mt-4 flex flex-col gap-2" key={obj._id}>
            <div className="flex gap-4">
              <label className="flex-1">
                <strong>Name:</strong>
                <input
                  type="text"
                  value={obj.name}
                  readOnly
                  className="w-full border px-2 py-1 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="flex-1">
                <strong>Email:</strong>
                <input
                  type="text"
                  value={obj.email}
                  readOnly
                  className="w-full border px-2 py-1 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
            </div>
            <div className="flex gap-4">
              <label className="flex-1">
                <strong>Mobile No.:</strong>
                <input
                  type="text"
                  value={obj.mobile}
                  readOnly
                  className="w-full border px-2 py-1 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="flex-1">
                <strong>Address:</strong>
                <input
                  type="text"
                  value={obj.address}
                  readOnly
                  className="w-full border px-2 py-1 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
            </div>
            <div className="flex gap-4">
              <label className="flex-1">
                <strong>Village:</strong>
                <input
                  type="text"
                  value={obj.village}
                  readOnly
                  className="w-full border px-2 py-1 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="flex-1">
                <strong>City:</strong>
                <input
                  type="text"
                  value={obj.city}
                  readOnly
                  className="w-full border px-2 py-1 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
            </div>
            <div className="flex gap-4">
              <label className="flex-1">
                <strong>Adhar Number:</strong>
                <input
                  type="text"
                  value={obj.adhaarNo}
                  readOnly
                  className="w-full border px-2 py-1 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="flex-1">
                <strong>Adhar Pic:</strong>
                <img
                  src={`http://localhost:3007/uploads/${obj.adhaarPic}`}
                  alt="Adhar"
                  className="w-48 h-48"
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
}



 function Gcard({ data })
{


//    var [dataObj, setObj] = useState([]);
   const [modalVisible, setModalVisible] = useState(false);
  const [selectedGrower, setSelectedGrower] = useState({});


    // alert("hnji in gacrd");
  async function doContact( obj, event)
    {
        console.log("in contact");
        console.log();
        console.log(obj);
        
         const url = "http://localhost:3007/GProfile/fetchGfromProfile";

         try {
            const servermsg = await axios.post(url, obj);
            // setObj(servermsg.data);
            setSelectedGrower(servermsg.data);
            setModalVisible(true);
          } catch (error) {
            console.error("Error fetching grower data", error);
          }

    }
    if (!Array.isArray(data)) {
        return null; // or display an error message
    }

    return (
        <div  style= {{display:"flex","flex-wrap":"wrap"}}>
            {data.map((obj) => (
                <Card key={obj._id} data={obj} doContact={doContact} />
            ))}
            <Modal isVisible={modalVisible} onClose={() => setModalVisible(false)} data={selectedGrower}/>
        </div>
    );
}

function Card(prop)
{
    


    return(
        <>
        <div class="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
    <div class="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
        <div class="relative w-full md:w-48 flex justify-center items-center whitespace-wrap">

            <img src={`http://localhost:3007/uploads/${prop.data.productPic}`} alt="shopping image" class=" w-48 h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"/>
        </div>
        <form class="flex-auto p-6">
            <div class="flex flex-wrap">
                <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">{prop.data.items}</h1>
                <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">{prop.data.category}</div>
            </div>
            <br />
            <div class="flex mb-4 text-sm font-medium">
             
                <button type="button"
                   onClick={(event)=>prop.doContact(prop.data)} class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Contact</button>
            
            </div>

           
        </form>
    </div>
</div>

        </>
    )
}





export default Gcard;

//    onClick={prop.doContact( prop.data.email)}   - agr y krti hun toh - jb component bnega toh sath k sath y doContact call hoojyga - kyuki onclick toh ek event lisener hota h - hum onclick p tph koi function bna nhi rhe na hum toh bne bnay ko call krrhe h (ur y thoda atpata sa lga mujhe bhi pr jo h vo h)
// but hme chaiye ki jb hum ek specific component k serach button p click kren sirf tb hi vo function call ho - isliye on click p ek function bnana pdega - jo ki call krega doContact ko 