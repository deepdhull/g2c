import { useNavigate } from "react-router-dom";

function ConsumerDash()
{
  var navigate = useNavigate();
  function openProfile()
  {
    navigate("/CProfile");

  }

  function openFG()
  {
    navigate("/FindG");
  }


    return(
        <>
         <div className="flex  flex-col h-screen">
  
  <div class="flex-grow flex justify-center items-center ">
    
      <div class="w-full max-w-xs mx-2 relative group bg-gray-900  py-12 sm:py-24 px-6  flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img class="w-32 h-32 object-cover object-center " src="photos/profile_2274420.png" alt="art" />
        <h4 class="text-white text-2xl font-bold capitalize text-center">Profile</h4>
        <input type="button" value="Profile" onClick={openProfile} className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />

      </div>
    
      <div class="w-full max-w-xs mx-2 relative group bg-gray-900  py-12 sm:py-24 px-6  flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <img class="w-32 h-32 object-cover object-center " src="photos/recruitment.png" alt="art" />
        <h4 class="text-white text-2xl font-bold capitalize text-center">Find Growers</h4>
        <input type="button" value="Manage" onClick={openFG}  className="sm:col-span-2 bg-green-500 text-white p-2 rounded-md cursor-pointer" />

      </div>
     
  </div></div>


        </>
    )
}

export default ConsumerDash;