// import "flowbite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "../../src/design.css";
import { useNavigate } from "react-router-dom";

function Frontpg()
{
     var navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };
    function doOpenS1()
    {
          navigate("/S1");
    }
    function doOpenS2()
    {
          navigate("/S2");
    }
    function doOpenS3()
    {
          navigate("/S3");
    }
    return(
        <>
        <div >
        <div className="">
          <div className="pt-16 slider-container"> {/* Add padding to the top to prevent overlap */}
                <Slider {...settings} >
                    <div>
                        <img src="photos/ryan-arnst-jN7egxv2K3M-unsplash.jpg" className="slider-image" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="photos/pexels-erikscheel-95425.jpg" className="slider-image" alt="Slide 2" />
                    </div>
                    <div>
                        <img src="photos/pexels-shvetsa-3962287.jpg" className="slider-image" alt="Slide 3" />
                    </div>
                    <div>
                        <img src="photos/pexels-kampus-8422683.jpg" className="slider-image" alt="Slide 4" />
                    </div>
                    <div>
                        <img src="photos/1000_F_366164036_ykbSeWyWVjWIT42YWChrQxJRlmRHLVu9.jpg" className="w-500 h-250" alt="Slide 5" />
                    </div>
                </Slider>
            </div>
            
           </div>
          
           <p class="text-center bg-blueGray-800 px-2 py-3 text-white font-bold ...">Our Services</p>
           <div class="flex-grow flex justify-around items-center " >
      
           <div class="relative flex justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
    <div
        class="group relative cursor-pointer overflow-hidden bg-blueGray-800 py-12 px-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-xs sm:rounded-lg">
        <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div class="relative z-10 mx-auto max-w-xs">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </span>
            <div
                class="space-y-6 pt-5  h-full text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p class="font-bold ">Bridging Gap Between Growers and Consumers</p>
            </div>
            <div class="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href="" onClick={doOpenS1} class="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>
<div class="relative flex justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
    <div
        class="group relative cursor-pointer overflow-hidden bg-blueGray-800 py-12 px-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-xs sm:rounded-lg">
        <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div class="relative z-10 mx-auto max-w-xs">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </span>
            <div
                class="space-y-6 pt-5  h-full  text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p class="font-bold ">Empowering the Local Growers and Producers</p>
            </div>
            <div class="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href="#" onClick={doOpenS2} class="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>
<div class="relative flex justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
    <div
        class="group relative cursor-pointer overflow-hidden bg-blueGray-800 py-12 px-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-xs sm:rounded-lg">
        <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div class="relative z-10 mx-auto max-w-xs">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </span>
            <div
                class="space-y-6 pt-5  h-full text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p class="font-bold ">Promoting Transparency and Community Trust</p>
            </div>
            <div class="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href="#" onClick={doOpenS3} class="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
</div></div>

      
      {/* <div class="w-full max-w-xs mx-2 relative group bg-gray-900  py-12 sm:py-24 px-6  flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img class="w-32 h-32 object-cover object-center " src="photos/groceries.png" alt="art" />
        <h4 class="text-white text-2xl font-bold capitalize text-center">developer</h4>
        <input type="button" value="Avail "  className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />

      </div> */}
      </div>


        </>
    )
}
export default Frontpg