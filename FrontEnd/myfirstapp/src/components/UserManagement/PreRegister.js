import React, { Component } from "react";

import { Link } from "react-router-dom";


class PreRegister extends Component {
  render() {
    return (
      <div className="preRegister">
        <div className="container">
          <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4" >Account Type</h1>
              <br></br>
              <p className="lead">
              <Link to="/register" style = {{color:"white"}}> 
              <div className="button">
                  
                  <h4>Register as a public user</h4>
                  Buy and sell second hand books
                  
              </div> 
              </Link><br></br>
              <Link to="/register" style = {{color:"white"}}>
              <div className="button" type="submit">
                  <h4>Register as a shop owner/ publisher</h4>
                  Buy and sell books
              </div>
              </Link>
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PreRegister;