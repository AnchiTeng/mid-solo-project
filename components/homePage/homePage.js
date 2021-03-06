import React, {Component} from 'react';
import './homePage.css';
import userIcon from './userIcon.png';  
import { Route, Switch} from "react-router-dom";
import VideoSlide from "../videoSlide/videoSlide"

class MemberSideBar extends Component {
    constructor(){
    super();
    this.state = {
      customers: []  
    }
    }
    componentDidMount(){
      fetch('/api/customer') 
        .then(res => res.json()) 
        //setState can have 2nd err callback
        .then(customersData => this.setState({customers:customersData },()=>console.log('customers fetched..',customersData)));
    }

  render(){
    return (
    <div className='sideBar'>
      <img className='userSignUpIcon' src={userIcon} />
      <h2>Customers</h2>
      
      <a href='http://localhost:5000/api/customer'>
        <button className='buttonLogin'>Login</button>
    </a>
      <a href='http://localhost:3000/myvideo'>
    <button className='buttonMyVideos'>My Videos</button>
     </a>
        
        <button className='buttonSetting'>Setting</button>
        <h3>
            {this.state.customers.map(customer => 
                <li key={customer.id}>
                    {customer.firstName}  {customer.lastName}
                </li>)}
        </h3>
       
      <VideoSlide/>
    </div>
  );
}
}

export default MemberSideBar;
