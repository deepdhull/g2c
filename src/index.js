import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import ProfileG from './components/Grower/ProfileG';
import AvailProduct from './components/Grower/AvailProduct';
import ItemsManager from './components/Grower/ItemsManager';
import NavBar from './components/Nav/Navbar';
import { BrowserRouter } from 'react-router-dom';
import GrowerDash from './components/Grower/GrowerDash';
import FindGrower from './components/Consumer/FindGrower';
  import Jsg from './deep/Jsg';
  import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
<BrowserRouter>
    <App />
    {/* <Jsg></Jsg> */}
   {/* <Login></Login> */}
     {/* <Signup></Signup> */}
     {/* <ProfileG></ProfileG> */}
     {/* <FindGrower></FindGrower> */}
       {/* <AvailProduct></AvailProduct> */}
      {/* <ItemsManager></ItemsManager> */}
      {/* <GrowerDash></GrowerDash> */}
      
      </BrowserRouter>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

