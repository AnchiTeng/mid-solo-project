//import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch,browserHistory } from "react-router";
import MemberSideBar from './components/homePage/homePage';
//import VideoSlide from './components/videoSlide/videoSlide';
import MyVideo from './components/userPage/myVideo';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
        
    //     <h4>solo project</h4> 
       
    //   </header>
      
      
    //   <MyVideo/>
    // </div>
    <main>
    <Switch>
      <Route exact path='/' component={MemberSideBar} />
      <Route exact path='/myvideo' component={MyVideo} />
      
    </Switch>
  </main>
  );
}
//test
export default App;
