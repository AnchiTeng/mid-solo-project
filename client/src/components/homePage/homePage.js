import React, {Component} from 'react';
import './homePage.css';
import userIcon from './userIcon.png'; 
import hp1 from './hp-1.jpeg'; 
//import { Route, Switch} from "react-router-dom";
import VideoSlide from "../videoSlide/videoSlide";

import { Button,Image } from 'react-bootstrap';




const MemberSideBar = () =>{



  return (
    <div className='sideBar'>
      <img className='userSignUpIcon' src={userIcon} alt=''/>
      
      
      
      <a href='http://localhost:3000/login-or-register'>
        <button className='buttonLogin'>Login/Register</button>
    </a>
      {/* <a href='http://localhost:3000/myvideo'>
    <button className='buttonMyVideos'>My Videos</button>
     </a> */}
        
        {/* <Button variant="primary">Setting</Button> */}
        
        
        <button className='buttonSetting'>Setting</button>
        

            <center>
            <Image src={hp1} fluid />
            </center>

      <VideoSlide/>
    </div>
  );

}

//--------class------------------------

// class MemberSideBar extends Component {
//     constructor(){
//     super();
//     this.state = {
//       customers: [],
        
//     }
//     }
//     componentDidMount(){
//       fetch('/api/customer') 
//         .then(res => res.json()) 
//         //setState can have 2nd err callback
//         .then(customersData => this.setState({customers:customersData },()=>console.log('customers fetched..',customersData)));
//     }

//   render(){
//     return (
//     <div className='sideBar'>
//       <img className='userSignUpIcon' src={userIcon} alt=''/>
//       <h2>Customers</h2>
      
      
//       <a href='http://localhost:3000/login-or-register'>
//         <button className='buttonLogin'>Login/Register</button>
//     </a>
//       <a href='http://localhost:3000/myvideo'>
//     <button className='buttonMyVideos'>My Videos</button>
//      </a>
        
//         <button className='buttonSetting'>Setting</button>
//         <h3>
//             {this.state.customers.map(customer => 
//                 <li key={customer.id}>
//                     {customer.firstName}  {customer.lastName}
//                 </li>)}
//         </h3>

        
       
//       <VideoSlide/>
//     </div>
//   );
// }
// }

export default MemberSideBar;