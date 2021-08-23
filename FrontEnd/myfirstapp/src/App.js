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
import Login from "./components/UserManagement/Login";
import PreRegister from "./components/UserManagement/PreRegister";


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
            <Route exact path="/login" component={Login} />

            {
              //Private Routes
            }
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addPerson" component={AddPerson} />
          
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;