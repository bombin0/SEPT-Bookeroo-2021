import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ManageBooks extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
            description: "",
            price: "",
            rating: 0,
            isbn: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newListing = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            price: this.state.price,
            isbn: this.state.isbn,
            rating: this.state.rating
        }

        axios.post("http://localhost:8080/api/books/save", newListing);
    }

    render() {
        return (

            <div className="Books">
                <div className="leftSide" style={{ marginLeft: "2%", float: "left", width: "30%", backgroundColor: "rgba(0, 128, 0, 0.075)" }}>
                    <br></br>
                    <h3 style={{ textAlign: "center", color: "grey" }}> ADMIN MANUAL ADD BOOK </h3>
                    <br></br><br></br>
                    <form onSubmit={this.onSubmit}>
                        <center>
                            <h6>Book Title:</h6>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg "
                                    placeholder="BOOK TITLE"
                                    name="title"
                                    value={this.state.title}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <h6>Author:</h6>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="AUTHOR"
                                    name="author"
                                    value={this.state.author}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>

                            <h6>ISBN:</h6>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="ISBN"
                                    name="isbn"
                                    value={this.state.isbn}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>


                            <h6>Description:</h6>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="DESCRIPTION"
                                    name="description"
                                    value={this.state.description}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <h6>Price:</h6>
                            <div className="form-group">
                                <input type="number" className="form-control form-control-lg"
                                    placeholder="PRICE"
                                    name="price"
                                    value={this.state.price}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>

                            <input type="submit" className="btn btn-info btn-block mt-4" value="ADD BOOK" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "25%" }} />
                        </center>
                        <br></br>
                    </form>
                </div>
                <div className="row" style={{ float: "left", marginLeft: "3%", width: "60%" }}>
                    <div className="col-md-12">
                        <h3 style={{ textAlign: "center", color: "grey" }}> SEARCH EXISTING BOOKS BY TITLE/ISBN/AUTHOR </h3> <br></br>
                        <center>
                            <form>
                                <input type="text" onChange={this.onChange} placeholder="SEARCH EXISTING BOOKS BY TITLE/ISBN/AUTHOR" name="search" style={{ width: "80%", height: "40px" }} />
                                <button type="submit" style={{ height: "40px", backgroundColor: "rgb(241, 179, 8)", border: "yellow" }}><i class="fa fa-search"></i> SEARCH  </button>
                            </form>
                        </center>
                        <br />
                        <div className="results" style={{ backgroundColor: "rgba(0, 128, 0, 0.075)" }}>
                            <br></br><h3 style={{ marginLeft: "2%", color: "grey" }}> RESULTS </h3>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ManageBooks.propTypes = {
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {})(ManageBooks);