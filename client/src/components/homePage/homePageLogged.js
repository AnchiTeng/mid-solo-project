import React, {Component} from 'react';
import './homePage.css';
import userIcon from './userIcon.png';  
import { Route, Switch} from "react-router-dom";
import VideoSlide from "../videoSlide/videoSlide";



const MemberSideBar2 = () =>{

  return (
    <div className='sideBar'>
      <img className='userSignUpIcon' src={userIcon} alt=''/>
      <h2>Customers</h2>
      
      
      <a href='http://localhost:3000/login-or-register'>
        <button className='buttonLogin'>Logout</button>
    </a>
      <a href='http://localhost:3000/myvideo'>
    <button className='buttonMyVideos'>My Videos</button>
     </a>
        
        <button className='buttonSetting'>Setting</button>
        {/* <h3>
            {this.state.customers.map(customer => 
                <li key={customer.id}>
                    {customer.firstName}  {customer.lastName}
                </li>)}
        </h3> */}
        {/* <div className="homepage">
            <h1>Hello Homepage</h1>
            <button className="button" onClick={() => setLoginUser({})} >Logout</button>
        </div> */}

        
       

      <VideoSlide/>
    </div>
  );

}
export default MemberSideBar2;