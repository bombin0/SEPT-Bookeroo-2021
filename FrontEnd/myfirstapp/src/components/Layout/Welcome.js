import React, { Component } from "react";
import { Link } from "react-router-dom";
import bookerooHome from "../../images/BookerooHome.jpg";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import support from "../../images/support.png";
import crumbled from "../../images/crumbled.jpg";
import books from "../../images/books2.jpeg";
import books3 from "../../images/books3.jpeg";
class Welcome extends Component {
  render() {
    return (
      <div className="landing">

        <div className="hello" style={{float:"left"}}>
          <div className="child">
            <img src={books} 
              style={{width:"100%"}}    
            />
          
            <img src={books} 
              style={{width:"100%"}}    
            />
          </div>
          
        </div>
        <div className="flex-container">

          
          <div className="child" style={{float:"right"}}>
            <center>
            <h1 id="welcome">Welcome to </h1> <h1 id="title">BOOKEROO</h1>
            <h1 id="subtext">The number one website to buy, sell and share books</h1>
            </center>
            <div>
              <center>
              
              <span className="buttonM">
                <a href="/login"> Login </a>
              </span>
             
              <span className="buttonM">
              
                <a href="/preregister"> Register </a>
              </span>
              
              </center>
            </div>
          </div>
        </div>

        <div className="flex-container">

          <center>
          <div className="child">
            <h2 id="browse">Browse Book Library</h2>
            <body id="browse-text">Browse BOOKEROO's wide selection of books ranging from latest release books, bestselling authors, timeless classics, and many more!  </body>

            <a id="read-more-link" href="/browse"><u>Learn more → </u></a>
            <div>

            </div>
          </div>
          </center>
        </div>

        <div className="contact-space" style={{ backgroundImage: `url(${require("../../images/crumbled.jpg")})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
          <div className="flex-container" >
            <div className="contact-us-child">
              <h1> Contact Us</h1>
              <b>If you have any enquiries, feel free to contact the customer service team using any of the contact methods below!</b>
            </div>


          </div>

          <div className="flex-container" >
            <div className="info-child">
              <img className="img" src={email} style={{width:"50px"}}/>
              <h1> Email</h1>
              <b> BOOKEROO@BOOKEROO.COM </b>
            </div>
            <div className="info-child">
              <img className="img" src={phone} style={{width:"50px"}}/>
              <h1> Phone</h1>
              <b> +61(XXX-XXX-XXX) </b>
            </div>
            <div className="info-child">
              <img className="img" src={support} style={{width:"50px"}}/>
              <h1> Support</h1>
              <b> BOOKEROO's online hours of operations are:<br /> Monday to Friday 9.00am to 5.00pm AEST<br /> </b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;