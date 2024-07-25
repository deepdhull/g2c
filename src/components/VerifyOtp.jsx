import "../index.css";
import React, { useState, useEffect} from 'react';
import axios from "axios";
import { Routes, Route, useNavigate, BrowserRouter, Navigate } from 'react-router-dom';
function VerifyOtp()
{
    const [obj, setObj] = useState({
        email: "",
        otp: ""
    });
    var navigate = useNavigate();

    useEffect(() => {
        // Fetch email from local storage
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setObj(prevObj => ({ ...prevObj, email: storedEmail }));
        }
    }, []);

    function doUpdate(event) {
        const { name, value } = event.target;
        setObj({ ...obj, [name]: value });
    }

    async function doVerifyOtp() {

        const url = "http://localhost:3007/Login/verify";
        
        const servermesg = await axios.post(url, obj);
        if(servermesg.data.status)
            {
                navigate("/updatePass");
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
                                <center>Verify Otp</center>
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter email</label>
                                    <input type="email" name="email" value={obj.email} onChange={doUpdate} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter OTP</label>
                                    <input
                                        type="text"
                                        name="otp"
                                        value={obj.otp}
                                        onChange={doUpdate}
                                        id="otp"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter OTP"
                                        required=""
                                    />
                                </div>
                                       
                                <div class="flex items-center justify-center">
                                    <input type="button" value="Verify" onClick={doVerifyOtp} class="bg-black text-white py-2 px-4 rounded-md cursor-pointer" />

                                </div>
                             

                            </form>
                        </div>
                    </div>
                </div>
            </section>
           
   
        </>
    )
}
export default VerifyOtp;