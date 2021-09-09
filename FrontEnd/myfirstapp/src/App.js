import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPerson from "./components/Persons/AddPerson";
import { Provider } from "react-redux";
import store from "./store";

import Welcome from "./components/Layout/Welcome";
import Register from "./components/UserManagement/Register";
import Browse from "./components/Layout/Browse";
import Login from "./components/UserManagement/Login";
import PreRegister from "./components/UserManagement/PreRegister";
import Register_2 from "./components/UserManagement/Register_2";
import ManageUsers from "./components/Admin/ManageUsers";
import ManageBooks from "./components/Admin/ManageBooks";

import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";
import AddBook from "./components/Books/AddBook";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  //setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {

    return (

      
      

      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              //Public Routes
            }
           
            <Route exact path="/" component={Welcome} />
            <Route exact path="/preregister" component={PreRegister} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register2" component={Register_2} />
            <Route exact path="/login" component={Login} />
            

            {
              //Private Routes
            }
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/adminManageUsers" component={ManageUsers} />
            <Route exact path="/addPerson" component={AddPerson} />
            <Route exact path="/adminManageBooks" component={ManageBooks} />
            <Route exact path="/addBook" component={AddBook} />
            <Route exact path="/browse" component={Browse} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;