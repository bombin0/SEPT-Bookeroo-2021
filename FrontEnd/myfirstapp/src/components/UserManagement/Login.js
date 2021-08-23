import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="col-md-8 m-auto">
          <br></br><br></br>
          <center>
            <i class="fa fa-user-circle fa-10x" style={{ color: "black" }}></i>
          </center>
          <br></br>
          <h4 className="display-12 text-center" style={{ color: "black", fontFamily: "Arial", fontWeight: "bold" }}> BOOKEROO LOG IN</h4>
          <br></br>
          <form action="dashboard.html">
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block mt-5">Login </button>
            <br></br>
          </form>
          <center>
            <a href="/register" style={{ color: "black", fontFamily: "Arial" }}> New to BOOKEROO? Click here to register.</a>
            <br></br><br></br>
            <i class="fas fa-arrow-left"> <a href="/" style={{ color: "black", fontFamily: "Arial" }}>Back to homepage</a></i>
          </center>
        </div>
        <br></br><br></br>
      </div>
    );
  }
}

export default Login;