import React, { Component } from "react";
import { Link } from "react-router-dom";
import bookerooHome from "../../images/BookerooHome.jpg";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import support from "../../images/support.png";
import crumbled from "../../images/crumbledpic.jpg";

class Welcome extends Component {
  render() {
    return (
      <div className="landing">
        <div className="flex-container">

          <div className="child">
            <img src={bookerooHome} />


          </div>
          <div className="child">
            <h1 id="welcome">Welcome to <br />Bookeroo</h1>
            <h1 id="subtext">The number one <br />website to buy and sell <br /> books</h1>

            <div>
              <span className="buttonM">
                <a href="/login"> Login </a>
              </span>
              <span className="buttonM">
                <a href="/preregister"> Register </a>
              </span>
            </div>
          </div>
        </div>

        <div className="flex-container">

          <div className="child">
            <img src={bookerooHome} />

          </div>

          <div className="child">
            <h2 id="browse">Browse Book Library</h2>
            <body id="browse-text">Browse BOOKEROO's wide selection of books ranging from latest release books, bestselling authors, timeless classics, and many more!  </body>

            <a id="read-more-link" href="#"><u>Learn more → </u></a>
            <div>

            </div>
          </div>
        </div>

        <div className="contact-space" style={{ backgroundImage: `url(${require("../../images/crumbledpic.jpg")})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
          <div className="flex-container" >
            <div className="contact-us-child">
              <h1> Contact Us</h1>
              <b>If you have any enquiries, feel free to contact the customer service team using any of the contact methods below!</b>
            </div>


          </div>

          <div className="flex-container" >
            <div className="info-child">
              <img className="img" src={email} />
              <h1> Email</h1>
              <b> BOOKEROO@BOOKEROO.COM </b>
            </div>
            <div className="info-child">
              <img className="img" src={phone} />
              <h1> Phone</h1>
              <b> +61(XXX-XXX-XXX) </b>
            </div>
            <div className="info-child">
              <img className="img" src={support} />
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