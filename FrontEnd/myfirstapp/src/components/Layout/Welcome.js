import React, { Component } from "react";
import { Link } from "react-router-dom";
import monkeyImage from "../../images/monkey.jpg";

class Welcome extends Component {
  render() {
    return (
      <div className="landing">
        <div className="flex-container">

          <div className="child">
            <img src={monkeyImage} />


          </div>
          <div className="child">
            <h1 id="welcome">Welcome to Bookeroo</h1>
          <div classname= "subtext">
            <h2>The number one website to buy or sell books</h2>
          </div>
            <div>
              <span className="button">
                Login
              </span>
              <span className="button">
                Register
              </span>
            </div>
          </div>
        </div>

        <div className="flex-container">

          <div className="child">
            <img src={monkeyImage} />

          </div>

          <div className="child">
            <h2>Browse book library</h2>
            <h4>Browse our wonderful selection of books here</h4>

            <a href="#"><u>Read more</u></a>
            <div>

            </div>
          </div>
        </div>

        <div className = "flex-container">
        <h1> Contact Us</h1>
        
        <br/><h4> Lorem </h4>

        </div>


        
      </div>
        );
  }
}

        export default Welcome;