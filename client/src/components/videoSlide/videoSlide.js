import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import './videoSlide.css';
import userIcon from '../homePage/userIcon.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  function VideoSlide() {
    

    return (
        <>
        
        <div>
        <Carousel breakPoints={breakPoints}>
            <img src={userIcon} alt=''/>
            <video width="320" height="240" controls>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"></source>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/ogg"></source>
            
            </video>
            <button>13</button>
            <button>14</button>
            <button>15</button>
            <button>16</button>
            <button>17</button>
            <button>18</button>
        </Carousel>
        </div>
        </>
        
      
    );
  }

  export default VideoSlide;
  
//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<TestSlide />, rootElement);  