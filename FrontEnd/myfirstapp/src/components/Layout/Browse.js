import React, { Component, useEffect } from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import harry from "../../images/Harry.jpg";
import boy from "../../images/boy.jpg";


class Browse extends Component {

    constructor() {
        super();
        this.state = {
            books: [],
            searchBooks: [],
            search: "",
            bookType:"",
            topRated: []
        };
        this.onChange = this.onChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/books/allBooks")
            .then(res => {
                this.setState({ books: res.data });
            })
    }

    handleSearch = event => {
        event.preventDefault();
        axios.get(`http://localhost:8080/api/books/searchbook/${this.state.search}`)
            .then(res => {
                const searchBooks = res.data;
                this.setState({ searchBooks });
                console.log(searchBooks)
            })
        this.state.edit = "false";
    }

    handleRadioChange(event) {
        this.setState({ bookType: event.target.value });
        axios.get("http://localhost:8080/api/books/topRatingBooks")
            .then(res => {
                this.setState({ topRated: res.data });
            })
        document.getElementsByName("bookType").disabled = true
    }

    render() {
        const { books } = this.state
        const { searchBooks } = this.state
        const {topRated} = this.state
        let searching;


        if (this.state.searchBooks.length != 0 && this.state.bookType=="") {
            console.log(this.state.searchBooks.length)
            searching =
            <div className="card-columns ">

            {searchBooks.map(books => <div class="card">
                <img className="card-img-top" src={harry} alt="Card image cap"></img>
                <div className="card-body">
                   <p> <b>Title:</b> {books.title} <br></br>
                        Author: {books.author} <br></br>
                        Price: $ {books.price}</p>
                </div>
            </div>)}

        </div>

        }

        if (this.state.searchBooks.length == 0 && this.state.bookType=="all") {
            console.log(this.state.searchBooks.length)
            searching =
            <div className="card-columns ">
            {books.map(books => <div class="card">
                <img class="card-img-top" src={harry} alt="Card image cap"></img>
                <div class="card-body">
                   <b> Title: </b> {books.title} <br></br>
                   <b> Author:</b> {books.author} <br></br>
                   <b> Price:</b> $ {books.price}
                </div>
            </div>)}
        </div>
        }

        if (this.state.bookType=="topRated"&&this.state.searchBooks.length == 0) {
            console.log(this.state.searchBooks.length)
            searching =
            <div className="card-columns ">
            {topRated.map(books => <div class="card">
                <img class="card-img-top" src={harry} alt="Card image cap"></img>
                <div class="card-body">
                   <b> Title: </b> {books.title} <br></br>
                   <b> Author:</b> {books.author} <br></br>
                   <b> Price:</b> $ {books.price}
                </div>
            </div>)}
        </div>
        }

        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-4">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-space-around" id="navDown">
                        <div className="navbar-nav">
                            <Link style={{ color: "black", textDecoration: "underline" }} className="nav-item nav-link active" to="/browse">Home <span className="sr-only">(current)</span></Link>
                            <Link style={{ color: "black" }} className="nav-item nav-link" to="#">My Orders</Link>
                            <Link style={{ color: "black" }} className="nav-item nav-link" to="/myShop">My Shop</Link>
                        </div>
                    </div>
                </nav>

                <center>
                    <form onSubmit={this.handleSearch}>
                        <div className="input-group input-group-lg w-50 p-3 mb-3 ">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Name/ Author / ISBN "
                                aria-label="search"
                                aria-describedby="basic-addon2"
                                name="search"
                                value={this.state.search}
                                onChange={this.onChange}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }}>Search</button>
                            </div>
                        </div>
                    </form>

                    
                        <input className = "bookType"type="radio" id="all" name="bookType" value="all" onChange={this.handleRadioChange} />
                        <label htmlFor="all">&nbsp; <b>All </b> </label> &nbsp;&nbsp;
                        <input className = "bookType" type="radio" id="topRated" name="bookType" value="topRated" onChange={this.handleRadioChange} />
                        <label htmlFor="topRated"> &nbsp; <b> Top Rated </b> </label><br></br>
                        <br></br>
                    
                </center>

                <a href="/" style={{color:"black"}}>{searching}</a>
                {/* <Carousel>
                    {books.map(books => <Carousel.Item className="citem" key={books.id}>
                        <img src={harry} alt="1st Slide" style={{height:"180px" ,width:"200px", marginTop:"10px"}} align="bottom"></img>
                        {books.Title}
                    </Carousel.Item>)}
                </Carousel> */}

                
            </div>
        )

    }

}

export default (Browse);