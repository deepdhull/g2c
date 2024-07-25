import React, { useState, useEffect } from 'react';
import "../../index.css";
import axios from "axios";

function ItemsManager() {
    // making the usestate obj
    var [obj, setObj] = useState({

        email: "",

    })

    var [res, setRes] = useState([]);
    

    const [path, setprev] = useState("");
    const [hdn, sethdn] = useState("");
    const [flag, setFlag] = useState("");

    // i have named it picpath - but it is complete file object not just path
    function doUpdate(event) {
        var { name, value } = event.target;

        setObj({ ...obj, [name]: value });
    }

    // useEffect(() => {
    //     doSearch();
    // }, []); 


   async function doDelete(objj) {
       const url = "http://localhost:3007/GAvail/doDelete"
        const serverMsg = await axios.post(url, objj);

    
    
        if (serverMsg.data.rec.deletedCount == 1)
        {
            alert("Deleted Successfullyyyyy");
            doSearch();
        }
        else
          alert(serverMsg.data.msg + "  " + serverMsg.data.err);

    }

    // if we  save with axios - input type button hi h obviously 
    // if we save with get - we need to pass the query string along with full url
    // if we save with post we need dont need to pass the query string just pass the usestate object 

    // HERE IM DOING IT WTH POST 

    // and if i want to save the image also - i need to make a formdata obj
    async function doSearch() {
        const url = "http://localhost:3007/GAvail/showProducts";


        const servermesg = await axios.post(url, obj);
        if (servermesg.data.status === true) {
            setRes(servermesg.data.res);
         //   alert(JSON.stringify(servermesg.data.res));

        } else {
            alert("not found");
        }

    }



    return (
        <>
            <div className="bg-gradient-to-b from-blue-200 to-blue-100 h-screen flex justify-center items-center">
                <div className="bg-white shadow-xl  p-8 rounded-lg shadow-lg">
                    <div class="mt-3">
                        <div class="border-b border-gray-900/10 pb-12 relative mt-2 border-b border-slate-200 rounded-md grid justify-items-center ...">
                            <h1 class="text-xl font-bold leading-7 text-gray-900">Manage Products</h1>


                            {/* <div className="mt-10">
                                <div className="flex justify-between sm:grid grid-cols-6 gap-x-6 gap-y-8">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                        <div className="mt-2">
                                            <input name="email" type="email" value={obj.email} onChange={doUpdate} autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <button type="button" onClick={doSearch} className="bg-blue-500 text-white p-2 rounded-md cursor-pointer">Search</button>
                                    </div>
                                </div>
                            </div> */}
                            <div class="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                                <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input  name="email" type="email" value={obj.email} onChange={doUpdate}  class="bg-gray-100 outline-none"  placeholder="email" />
                                </div>
                                <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">

                                    
                                </div>
                                <div class="bg-indigo-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                                <span><button type="button" onClick={doSearch} className=" text-white p-2 rounded-md cursor-pointer">Search</button></span>

                                </div>
                            </div>


                                <br />


                                <div style={{ marginLeft: "20px", marginRight: "20px" }}>
                                    <table className="table-auto shadow-xl  border-collapse border border-gray-300 rounded-lg w-full">
                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th className="px-4 py-2">Sno.</th>
                                                <th className="px-4 py-2">Email</th>
                                                <th className="px-4 py-2">Category</th>
                                                <th className="px-4 py-2">Item</th>
                                                <th className="px-4 py-2">ProductPic</th>
                                                <th className="px-4 py-2">Operations</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {res.map((objj, index) => (
                                                <tr key={index} className="bg-white border border-gray-300">
                                                    <td className="px-4 py-2">{index + 1}</td>
                                                    <td className="px-4 py-2">{objj.email}</td>
                                                    <td className="px-4 py-2">{objj.category}</td>
                                                    <td className="px-4 py-2">{objj.items}</td>
                                                    <td className="px-4 py-2 whitespace-wrap"><img src={`http://localhost:3007/uploads/${objj.productPic}`} alt={objj.productPic} className="w-24 h-24" /></td>
                                                    <td className="px-4 py-2">
                                                        <input type="button" value="Delete" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => doDelete(objj)} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                </div >

            </>
            )

}
            export default ItemsManager;