import React, { Component } from 'react'
import { Link } from "react-router-dom";
import searchButton from "../../images/searchbutton.png";

 class Browse extends Component {
    render() {
        return (
            <div className = "nav">
                <navbar>
                    <div class="nav-list">
                        <li class = "nav-item"></li>
                             <a href = "#">Home</a>
                        <li class = "nav-item"></li>
                             <a href = "#">Orders</a>    
                        <li class = "nav-item"></li>
                             <a href = "#">My Shop</a>
                    </div>
                </navbar>

            <div class = "search-bar">
                <input type="text" class ="input" placeholder="Search by name/author/ISBN">
                
                </input>
           
                
            </div>







            </div>
        )
    }
}
export default Browse;