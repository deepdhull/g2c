import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import GrowerDash from './components/Grower/GrowerDash';
import ProfileG from './components/Grower/ProfileG';
import AvailProduct from './components/Grower/AvailProduct';
import ItemsManager from './components/Grower/ItemsManager';
import NavBar from './components/Nav/Navbar';
import ConsumerDash from './components/Consumer/ConsumerDash';
import ProfileC from './components/Consumer/ProfileC';
import FindGrower from './components/Consumer/FindGrower';
import Forgotpass from './components/Forgotpass';
import UpdatePass from './components/UpdatePass';
import VerifyOtp from './components/VerifyOtp';
import Frontpg from './components/Frontpg';
import Service1 from './components/Service1';
import Service2 from './components/Service2';
import Service3 from './components/Service3';

function App() {
  return (
    <>
          <NavBar></NavBar>

    <Routes>
   <Route path="/" element={<Frontpg></Frontpg>}></Route>
   <Route path="/S1" element={<Service1></Service1>}></Route>
   <Route path="/S2" element={<Service2></Service2>}></Route>
   <Route path="/S3" element={<Service3></Service3>}></Route>
                <Route path="/FindG" element={<FindGrower></FindGrower>}></Route>
                <Route path="/Signup" element={<Signup></Signup>}></Route>
                <Route path="/Chngepass" element={<Forgotpass></Forgotpass>}></Route>
                <Route path="/updatePass" element={<UpdatePass></UpdatePass>}></Route>
                <Route path="/verifyotp" element={<VerifyOtp></VerifyOtp>}></Route>
                <Route path="/Login" element={<Login></Login>}></Route>

                <Route path="/growerdash" element={<GrowerDash></GrowerDash>}></Route>
                <Route path="/consumerdash" element={<ConsumerDash></ConsumerDash>}></Route>
                <Route path="/CProfile" element={<ProfileC></ProfileC>}></Route>

                <Route path="/profile" element={<ProfileG></ProfileG>}></Route>
                <Route path="/avail" element={<AvailProduct></AvailProduct>}></Route>
                <Route path="/prod" element={<ItemsManager></ItemsManager>}></Route>


    </Routes>
    </>
  );
}

export default App;
