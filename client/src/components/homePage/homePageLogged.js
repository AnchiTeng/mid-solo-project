import React, {Component} from 'react';
import './homePage.css';
import userIcon from './userIcon.png';  
import { Route, Switch} from "react-router-dom";
import VideoSlide from "../videoSlide/videoSlide";
import MemberSideBar from "./homePage";
import {Nav} from "react-bootstrap";

 

const MemberSideBar2 = ({setLoginUser},{user}) =>{


  return (

    <>
    

    
    <div className='sideBar'>
      <img className='userSignUpIcon' src={userIcon} alt=''/>
      <h2> ~~Welcome~~ </h2>
      
     
      <a href='http://localhost:3000/'>
        <button className='buttonLogin' onClick={() => setLoginUser({})}>Logout</button>
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
    </>
  );

}
export default MemberSideBar2;