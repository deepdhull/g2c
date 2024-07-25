import React, { useState } from 'react';
import "../../index.css";
import axios from "axios";
import { doSearchMvc, doSearchMvcC } from '../Services/profileControllerF';

function ProfileC() {
  // making the usestate obj
  var [obj, setObj] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    village: "",
    city: "",
    adhaarNo: "",
    adhaarPic: null,
  })

  const [path, setprev] = useState("");
  const [hdn, sethdn] = useState("");
  const [flag, setFlag] = useState("");

  // i have named it picpath - but it is complete file object not just path
  function doUpdate(event) {
    var { name, value } = event.target;

    setObj({ ...obj, [name]: value });
  }

  function doUpdatePic(event) { 
    const file = event.target.files[0];
    setObj({ ...obj, ["adhaarPic"]: file });
    setFlag("true"); // means a pic has been uploaded 

    // Update the image preview
    const reader = new FileReader();
    reader.onload = function (e) {
      const previewImage = document.getElementsByName("preview")[0];
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  // pehle file read hogi dir hi onload wala function chlega because vo kaam tbhi krta h jb file read ho huki hoti h 

/* "asynchronously" here refers to the fact that the file reading operation does not block the execution of other code. When you call `reader.readAsDataURL(file);`, the file reading process starts, but the JavaScript code continues to execute without waiting for the reading to finish.

Instead, the `FileReader` object performs the reading operation in the background. Once the reading operation is complete, it triggers the `onload` event, which then executes the specified event handler function. This allows your code to continue executing other tasks while the file is being read.

So, in this context, "asynchronously" means that the file reading operation is managed by the browser's runtime environment, and your JavaScript code can continue to run without being blocked by the file reading process. The reading process occurs independently of the main execution thread, and when it's finished, the specified event handler function is called.*/
/*When you call reader.readAsDataURL(file);, it initiates the file reading process. At this point, the browser begins reading the file asynchronously. The JavaScript execution continues, and if there's any code after reader.readAsDataURL(file);, it will execute immediately without waiting for the file reading to finish.

When the file reading operation is completed successfully, the onload event is triggered by the FileReader. At this point, the specified function function (e) { ... } assigned to reader.onload is called, and it executes the code inside the function. This is where you handle the loaded file data, in this case, updating the image preview.*/
  // if we  save with axios - input type button hi h obviously 
  // if we save with get - we need to pass the query string along with full url
  // if we save with post we need dont need to pass the query string just pass the usestate object 

  // HERE IM DOING IT WTH POST 

  // and if i want to save the image also - i need to make a formdata obj
  async function doSave() {
    const url = "http://localhost:3007/CProfile/add-C";

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

  async function doSearch() {

    // const url = "http://localhost:3007/GProfile/show-G";

    const servermesg = await doSearchMvcC(obj);
   var ans = servermesg.data.res[0];

    if (servermesg.data.status === true) {
      setObj(ans);
    

      if (servermesg.data.res[0].adhaarPic) {
        // const Pic = servermesg.data.res[0].adhaarPic;
        setprev(`http://localhost:3007/uploads/${servermesg.data.res[0].adhaarPic}`);
      }
    } else {
      alert("not found");
    }

    var hidden = servermesg.data.res[0].adhaarPic; // pic da name store kralya hidden ch
    sethdn(hidden);

  }

  async function doUpdateRec() {

    if (flag == "") // agr user ne pic chnge nhi kiti after search
    {

      setObj({ ...obj, ["adhaarPic"]: `http://localhost:3007/uploads/${hdn}` });

    }

    var formdata = new FormData();
    for (var prop in obj) {
      formdata.append(prop, obj[prop]);
    }


    const url = "http://localhost:3007/CProfile/update-C";
    const serverMsg = await axios.post(url, formdata, { headers: { 'Content-Type': 'multipart/form-data' } });
    console.log(serverMsg)




    if (serverMsg.data.status == true)
      alert("Updated Successfullyyyyy");
    else
      alert(serverMsg.data.msg + "  " + serverMsg.data.err);


  }

 




  return (
    <>
    <div class="min-h-screen p-6 bg-gradient-to-b from-blue-200 to-blue-100 flex items-center justify-center">
  <div class="container ">
     
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6  ">
          <div class="mt-3 space-y-12">
            <div class="border-b border-gray-900/10 pb-12 relative mt-10 border-b border-slate-200 rounded-md grid  ">
              <h1 class="text-lg font-bold leading-7 text-gray-900"><center>Profile Form</center></h1>

              <div class="mt-10 grid  gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="Name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                  <div class="mt-2 ">
                    <input type="text" name="name" value={obj.name} onChange={doUpdate} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <input type="button" value="Search" onClick={doSearch} className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" />
                </div>

                <div class="sm:col-span-3">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input name="email" type="email" value={obj.email} onChange={doUpdate} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                  <div class="mt-2">
                    <input type="text" onChange={doUpdate} value={obj.mobile} name="mobile" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div class="sm:col-span-3 sm:col-start-1">
                  <label for="Village" class="block text-sm font-medium leading-6 text-gray-900">Village</label>
                  <div class="mt-2">
                    <input type="text" onChange={doUpdate} value={obj.village} name="village" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="region" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                  <div class="mt-2">
                    <input type="text" onChange={doUpdate} value={obj.city} name="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>


                <div class="col-span-full">
                  <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Address (SHOP/HOME)</label>
                  <div class="mt-2">
                    <input type="text" onChange={doUpdate} value={obj.address} name="address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                

                <div class="sm:col-span-2">
                  <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Adhaar Number</label>
                  <div class="mt-2">
                    <input type="text" onChange={doUpdate} value={obj.adhaarNo} name="adhaarNo" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

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

                <div class=" sm:col-span-2 mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                   
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span class=""><center>Upload Adhar Pic</center></span>
                        <input id="file-upload"  name="adhaarPic" onChange={doUpdatePic}  type="file" class="sr-only" />
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
              

            <br />

            <input type="button" value="Save" onClick={doSave} className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />
            <input type="button" value="Update" onClick={doUpdateRec} className="sm:col-span-2 bg-blue-500 text-white p-2 rounded-md cursor-pointer" />

          </div>
        </div>

      </div>
    </div ></div ></div>

    </>
  )

}
export default ProfileC;