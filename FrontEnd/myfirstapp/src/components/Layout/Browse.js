import React, { Component, useEffect } from 'react'
import { Link } from "react-router-dom";
import searchButton from "../../images/searchbutton.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";


 class Browse extends Component {

    constructor() {
        super();
        this.state = {
            books : []
        };
    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/books/searchBook()")
          .then(res => {
            this.setState({books:res.data});
            console.log(res.data)
        })    
    }

    render() {
        const {books} = this.state
        return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-4">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-space-around" id="navDown">
            <div className="navbar-nav">
                <Link style= {{color:"black", textDecoration:"underline"}} className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></Link>
                <Link style= {{color:"black"}} className="nav-item nav-link" href="#">My Orders</Link>
                <Link style= {{color:"black"}} className="nav-item nav-link" href="#">My Shop</Link>
            </div>    
            </div>
            </nav>
            
            <center>
            <div className="input-group input-group-lg w-50 p-3 mb-3 ">
                <input type="text" className="form-control" placeholder="Search by Name/ Author / ISBN " aria-label="search" aria-describedby="basic-addon2"></input>
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
            </center>

            <div>
                <h1>List of books</h1>
                    {books.map(books => <div key = {books.id}> {books.isbn}</div>)}
            </div>
        </div>
        
    )
    }
}
export default Browse;