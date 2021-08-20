import React, { Component } from "react";
import { Link } from "react-router-dom";
import monkeyImage from "../../images/monkey.jpg";

class Welcome extends Component {
  render() {
    return (
      <div className="landing">
        <div className="flex-container">
          
          <div className= "child">
            <img src={monkeyImage}/>

              
          </div>
        <div className= "child">
            <h1>Welcome to Bookeroo</h1>
            <h2>The number one website to buy or sell books</h2>
            <div> 
              <span className = "button">
                Login
              </span>
              <span className = "button">
                Register
              </span>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Welcome;