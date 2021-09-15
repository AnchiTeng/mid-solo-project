import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import './videoSlide.css';
import userIcon from '../homePage/userIcon.png';

//Problems: can't pass test video path to video slide line 45~48 (9/12)
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  class VideoSlide extends Component {
    constructor(props){
      super(props);
      this.state = {
        
       test:[]  
      }
      }
      componentDidMount(){
        fetch('/videoslide') 
          .then(res => res.json()) 
          //setState can have 2nd err callback
          .then(testData => this.setState({test:testData },()=>console.log('videoPath fetched..',testData)));

      }

       renderVideos = (source) => {
        console.log('source in renderVideos: ', source);
       
        return source.map((srcPath) => {
          const re = /\/uploads\//g
          let strId = srcPath.replace(re,'');
          return <div>
             <video key={srcPath} width="320" height="240" controls>
            <source src={srcPath} type="video/mp4"></source>
            <source src={srcPath} type="video/ogg"></source>
            
            </video>
           
          </div>
        });
      };

      
    
render(){
    return (
        <>
        
        <div>
        <Carousel breakPoints={breakPoints}>
          {this.renderVideos(this.state.test)}
            {/* <img src={userIcon} alt=''/>
            <video width="320" height="240" controls>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"></source>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/ogg"></source>
            
            </video>
            
            <video key={this.state.test.id} width="320" height="240" controls>
            <source src={this.state.test.url} type="video/mp4"></source>
            </video>
            <button>14</button>
            <button>15</button>
            <button>16</button>
            <button>17</button>
            <button>18</button> */}

            
        </Carousel>
        

        </div>
        </>
        
    
    );
  }
}


  export default VideoSlide;
  
//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<TestSlide />, rootElement);  