import React, { Component } from 'react'
import { Link } from "react-router-dom";
import searchButton from "../../images/searchbutton.png";
import ManageBooks from '../Admin/ManageBooks';
import axios from "axios";

 class Browse extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-4">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse justify-content-space-around" id="navDown">
            <div class="navbar-nav">
                <a style= {{color:"black", textDecoration:"underline"}} class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a style= {{color:"black"}} class="nav-item nav-link" href="#">My Orders</a>
                <a style= {{color:"black"}} class="nav-item nav-link" href="#">My Shop</a>
            </div>    
            </div>
            </nav>
            
            <center>
            <div class="input-group input-group-lg w-50 p-3 mb-3 ">
                <input type="text" class="form-control" placeholder="Search by Name/ Author / ISBN " aria-label="search" aria-describedby="basic-addon2"></input>
                <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
            </center>
        </div>
    )
    }
}
export default Browse;