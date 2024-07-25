import React, { useState } from 'react';
import axios from "axios";

function UpdatePass()
{
    var [obj, setObj] = useState({
        email: "",
        password: "",
        password1:""
    })
    function doUpdate(event) {
        var { name, value } = event.target;

        setObj({ ...obj, [name]: value });
    }
    const [errorMessage, setErrorMessage] = useState("");
    const [Message, setMessage] = useState("");



    async function doChangePass(event)
    {
        if (obj.password === obj.password1) {
            console.log("Passwords match");
            setErrorMessage("");
            const url = "http://localhost:3007/Login/updatePass";
        
            const servermesg = await axios.post(url, obj);
            setMessage(servermesg.data.msg);
        } else {
            setErrorMessage("Passwords do not match");
        }
    }


    return(
        <>
        
        <section style={{ backgroundImage: "" }} class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-5xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-11 h-11 mr-2" src="photos/GROWERLOGO.png" alt="logo" />
                        G2C
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                <center>Change Password</center>
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" value={obj.email} onChange={doUpdate} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter New Password</label>
                                    <input type="password" name="password" value={obj.password} onChange={doUpdate} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-enter New Password</label>
                                    <input type="password" name="password1" value={obj.password1} onChange={doUpdate} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <div class="flex items-center justify-between">
                                   
                                </div>
                                <div class="flex items-center justify-center">
                                    <input type="button" value="Change Password" onClick={doChangePass} class="bg-black text-white py-2 px-4 rounded-md cursor-pointer" />
                                  
                                </div>
                                {errorMessage && (
                                    <div className="flex items-center justify-center text-red-500 mt-2">
                                        {errorMessage}
                                    </div>
                                )}
                                {Message && (
                                    <div className="flex items-center justify-center text-black-500 mt-2">
                                        {Message}
                                    </div>
                                )}
                             

                            </form>
                        </div>
                    </div>
                </div>
            </section>
           
 
        </>
    )
}
export default UpdatePass;