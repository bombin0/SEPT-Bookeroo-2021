import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPerson } from "../../actions/personActions";
import pilgrim from "../../images/pilgrim.jpg";

class NewListing extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-4">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-space-around" id="navDown">
                        <div className="navbar-nav">
                            <Link style={{ color: "black"}} className="nav-item nav-link " to="/browse">Home <span className="sr-only">(current)</span></Link>
                            <Link style={{ color: "black"}} className="nav-item nav-link" to="#">My Orders</Link>
                            <Link style={{ color: "black", textDecoration: "underline" }} className="nav-item nav-link active" to="/myShop">My Shop</Link>
                        </div>
                    </div>
                </nav>
                <div className="left-container">
                    <h3 className="listing-header"></h3>
                </div>
                <div className="right-container">

                </div>
            </div>
            
        )
    }
}

export default (NewListing);