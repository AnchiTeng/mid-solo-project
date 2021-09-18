//import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch,browserHistory } from "react-router";
import MemberSideBar from './components/homePage/homePage';
import MemberSideBar2 from './components/homePage/homePageLogged';
//import VideoSlide from './components/videoSlide/videoSlide';
import MyVideo from './components/userPage/myVideo';
import Login from './components/login/login';
import Register from './components/register/register';
import { useState } from 'react';//9/16
 


function App() {
  const [ user, setLoginUser] = useState({})//9/16

  let isLogged ; 
    if(user && user._id){
      isLogged = (<Route exact path='/' component={MemberSideBar2} />
      
      )

    }else{
    isLogged = (<Route exact path='/' component={MemberSideBar} />)
    }
  
  return (
   
    <main >
      
    <Switch>
      {/* <Route exact path='/' component={MemberSideBar} /> */}
      {/* <Route exact path="/">
            {
              user && user._id ? <MemberSideBar2 /> : <MemberSideBar />
            }
          </Route> */}
         {isLogged} 
      <Route exact path='/logged' component={MemberSideBar2} />
      <Route exact path='/myvideo' component={MyVideo} />
      {/* <Route exact path='/login' component={Login} /> */}
      <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
      </Route>
      <Route exact path='/login-or-register' component={Register} />



      {/* <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route> */}
      
    </Switch>
  </main>
  );
}
//test
export default App;

/*
9/16
logout btn should lead to hpage without myvideo btn

*/ 

