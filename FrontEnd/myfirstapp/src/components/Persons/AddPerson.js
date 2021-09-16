import React, { Component } from 'react'
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import bookService from "../Books/services/bookService";
import { createPerson } from "../../actions/personActions";
import Harry from "../../images/Harry.jpg";
import pilgrim from "../../images/pilgrim.jpg";
import boy from "../../images/boy.jpg";
import top10 from "../../images/top10.png";
import Releases from "../../images/releases.jpg";
import rated from "../../images/rated.jpg";


class AddPerson extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
            category: "",
            description: "",
            price: "",
            coverArt: null,
            contents: null,
            search: "",
            searchBooks: [],
            books: [],
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newListing = {
            title: this.state.title,
            author: this.state.author,
            category: this.state.category,
            description: this.state.description,
            price: this.state.price,
        }
        axios.post("http://localhost:8080/api/books/save", newListing);
        window.location.reload();

    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/books/allBooks")
            .then(res => {
                this.setState({ books: res.data });
            })
    }

    onFileUpload(e) {
        this.setState({ [e.target.name]: e.target.files[0] });
    }

    handleSearch = event => {
        event.preventDefault();
        axios.get(`http://localhost:8080/api/books/searchbook/${this.state.search}`)
            .then(res => {
                const searchBooks = res.data;
                this.setState({ searchBooks });
            })
        this.state.edit = "false";
    }

    editBook(id) {
        this.props.history.push(`/updateBook/${id}`)
    }

    removeBook(id) {
        bookService.deleteBook(id).then(res => {
            this.setState({ searchBooks: this.state.searchBooks.filter(book => book.id !== id) });
        });
    }

    render() {
        const { books } = this.state
        const { searchBooks } = this.state
        let search;
        let searching;

        if (this.state.searchBooks.length == 0) {
            console.log(this.state.searchBooks.length)
            searching =
                <div className="card-columns ">
                </div>
        }

        if (this.state.searchBooks.length != 0) {
            console.log(this.state.searchBooks.length)
            searching =
                <div className="card-columns ">

                    {searchBooks.map(books => <div class="card">
                        <img className="card-img-top" src={Harry} alt="Card image cap"></img>
                        <div className="card-body">
                            <p> <b>Title:</b> {books.title} <br></br>
                                Author: {books.author} <br></br>
                                Price: $ {books.price}</p>
                        </div>
                    </div>)}

                </div>

        }

        return (
            <div className="Listing">

                <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-4">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-space-around" id="navDown">
                        <div className="navbar-nav">
                            <Link style={{ color: "black"}} className="nav-item nav-link" to="/browse">Home <span className="sr-only">(current)</span></Link>
                            <Link style={{ color: "black" }} className="nav-item nav-link" to="#">My Orders</Link>
                            <Link style={{ color: "black", textDecoration: "underline"}} className="nav-item nav-link active" to="/Browse">My Shop</Link>
                        </div>
                    </div>
                </nav>

                <div className="leftSide" style={{ marginLeft: "2%", float: "left", width: "30%", backgroundColor: "rgba(220, 220, 220)" }}>
                    <br></br>
                    <h3 style={{ textAlign: "center", color: "grey" }}>Create New Listing</h3>
                    <br></br><br></br>
                    <form onSubmit={this.onSubmit}>
                        <center>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg "
                                    placeholder="Add Book Title"
                                    name="title"
                                    value={this.state.title}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="Add Authors Name"
                                    name="author"
                                    value={this.state.author}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="Add Genre"
                                    name="category"
                                    value={this.state.category}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="Add a Description"
                                    name="description"
                                    value={this.state.description}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="Price $"
                                    name="price"
                                    value={this.state.price}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div> <br></br>
                            <h6 style={{ color: "grey" }}>Add a Book cover Page</h6>
                            <div className="form-group">
                                <input type="file"
                                    id="coverPage"
                                    name="coverPage"
                                    value={this.state.coverArt}
                                    onChange={this.onFileUpload}
                                    required />
                            </div>
                            <h6 style={{ color: "grey" }}>Add Book Content Page</h6>
                            <div className="form-group">
                                <input type="file"
                                    id="contentPage"
                                    name="contentPage"
                                    value={this.state.contents}
                                    onChange={this.onFileUpload}
                                    required />
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" value="Create Listing" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "30%" }} />
                        </center><br></br>
                    </form>
                </div>


                <div className="row" style={{ float: "left", marginLeft: "3%", width: "60%" }}>
                    <div className="col-md-12">
                        <h2 style={{ textAlign: "center", color: "grey" }}> My Listings </h2> <br></br>
                        <center>
                            <form onSubmit={this.handleSearch}>
                                <input type="text"
                                    onChange={this.onChange}
                                    placeholder="Search my Listings"
                                    name="search"
                                    style={{ width: "80%", height: "40px" }}
                                    value={this.state.search}
                                />
                                <button type="submit" style={{ height: "40px", backgroundColor: "rgb(241, 179, 8)", border: "yellow" }}><i class="fa fa-search"></i> SEARCH  </button>
                            </form>
                        </center>
                        <div>
                            {search}
                            {this.state.searchBooks.map(book =>

                                <table style={{ borderCollapse: "separate", borderSpacing: "2em" }}>
                                    <tr>
                                        <td>
                                            <b>Title: </b>{book.title} <br />
                                            <b>Author: </b>{book.author} <br />
                                            <b>Category: </b>{book.category} <br />
                                            <b>Description: </b>{book.description} <br />
                                            <b>Price: </b> {book.price}<br />
                                        </td>
                                        <td>
                                            <form onSubmit={() => this.editBook(book.id)}>
                                                <input type="submit" className="btn btn-info btn-block mt-4" value="EDIT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "100%", float: "left" }} />
                                            </form>
                                        </td>
                                        <td>
                                            <form onSubmit={() => this.removeBook(book.id)}>
                                                <input type="submit" className="btn btn-info btn-block mt-4" value="REMOVE" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "100%", float: "left" }} />
                                            </form>
                                        </td>
                                    </tr>
                                </table>
                            )}

                        </div>

                        <div className="book-listing mt-4">

                            {books.map(books => <div class="card" id="listing" >
                                <div class="row no-gutters">
                                    <div class="col-sm-4">
                                        <img class="card-img" src={Harry} alt="Suresh Dasari Card" style={{ width: "200px", height: "200px" }}></img>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card-body">

                                            <p class="card-text">
                                                <b>Name:</b> {books.title}<br></br>
                                                <b>Author:</b> {books.author} <br></br>
                                                <b>Rating:</b> {books.rating} <br></br>
                                                <b>Price:</b>  {books.price}
                                            </p>

                                            <form onSubmit={() => this.editBook(books.id)}>
                                                <input type="submit" className="btn btn-info btn-block mt-4" value="EDIT"
                                                    style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "45%", float: "left" }} />
                                            </form>
                                            <form onSubmit={() => this.removeBook(books.id)}>
                                                <input type="submit" className="btn btn-info btn-block mt-4" value="REMOVE" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "45%", float: "right" }} />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            )}

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

AddPerson.propTypes = {
    createProject: PropTypes.func.isRequired
};

export default connect(
    null,
    { createPerson }
)(AddPerson);

