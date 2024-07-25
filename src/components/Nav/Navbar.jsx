import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import Slider from 'react-slick';
import GrowerDash from '../Grower/GrowerDash';
import ProfileG from '../Grower/ProfileG';
import AvailProduct from '../Grower/AvailProduct';
import ItemsManager from '../Grower/ItemsManager';
import "../../index.css";
import "flowbite";
import "flowbite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NavBar() {
    let navigate = useNavigate();
    function openLogin() {
        navigate("/Login");

    }

    function openSignup() {
        navigate("/Signup");

    }
    function doLogout() {
        localStorage.removeItem("token");
        navigate("/Login");
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (

        <>

            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />


            <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blueGray-800">
                <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
                        <a class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#">G2C</a>
                    </div>
                    <div class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800" id="example-collapse-navbar">

                        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
                            <li class="inline-block relative">
                                <input type="button" value="login" onClick={openLogin} className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />

                            </li>
                            <li class="inline-block ml-2 relative">
                                <input type="button" value="signup" onClick={openSignup} className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />

                            </li>
                            <li>
                                <div className="px-4 py-2 whitespace-wrap">


                                    <img src="photos/logout (1).png" onClick={doLogout} alt="" className="w-10 h-10 ml-10" /></div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

          

        </>




    )

}
export default NavBar;