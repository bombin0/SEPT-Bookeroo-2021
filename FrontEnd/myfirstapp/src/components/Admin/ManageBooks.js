import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import bookService from "../Books/services/bookService";

class ManageBooks extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            searchBooks: [],
            id: "",
            title: "",
            author: "",
            description: "",
            price: "",
            rating: 0,
            isbn: "",
            category: "",
            coverArt: null,
            contents: null,
            edit: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
        this.editBook = this.editBook.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFileUpload(e) {
        this.setState({ [e.target.name]: e.target.files[0] });
    }

    onSubmit(e) {
        e.preventDefault();
        //const bookcover = new FormData();
        //bookcover.append("image", this.state.coverArt);
        //const bookcontent = new FormData();
        //bookcontent.append("image", this.state.contents);
        const newListing = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            price: parseInt(this.state.price),
            isbn: this.state.isbn,
            rating: this.state.rating,
            category: this.state.category,
            //contents: bookcontent,
            //coverArt: bookcover
        }
        axios.post("http://localhost:8080/api/books/save", newListing);
        window.location.reload();
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

    editBook(id){
        this.props.history.push(`/updateBook/${id}`)
    }   

    removeBook(id){
        bookService.deleteBook(id).then( res => {
            this.setState({searchBooks: this.state.searchBooks.filter(book => book.id !== id)});
        });
    }

    render() {
        let search;
        if (this.state.searchBooks.length == 0){
            search = <h5 style={{color:"red"}}><center> No search results. Please enter your search above. </center></h5>
        } 
        

        return (

            <div className="Books">
                <br></br>
                <div className="leftSide" style={{ marginLeft: "2%", float: "left", width: "30%", backgroundColor: "rgba(0, 128, 0, 0.075)" }}>
                    <br></br>
                    <h3 style={{ textAlign: "center", color: "grey" }}> ADMIN MANUAL ADD BOOK </h3>
                    <br></br><br></br>
                    <form onSubmit={this.onSubmit}>
                        <center>
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
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="CATEGORY"
                                    name="category"
                                    value={this.state.category}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
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
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="PRICE"
                                    name="price"
                                    value={this.state.price}
                                    style={{ width: "60%" }}
                                    onChange={this.onChange}
                                    required
                                />
                            </div> <br></br>
                            <h6 style={{color: "grey" }}>ADD COVER PAGE</h6>
                            <div className="form-group">
                            <input type="file" 
                                   id="coverPage" 
                                   name="coverPage" 
                                   value={this.state.coverArt}
                                   onChange={this.onFileUpload}
                                   required/>
                            </div>
                            <h6 style={{color: "grey" }}>ADD CONTENT PAGE</h6>
                            <div className="form-group">
                            <input type="file" 
                                   id="contentPage" 
                                   name="contentPage"
                                   value={this.state.contents}
                                   onChange={this.onFileUpload}
                                   required/>
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" value="ADD BOOK" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "25%" }} />
                        </center><br></br>
                    </form>
                </div>
                <div className="row" style={{ float: "left", marginLeft: "3%", width: "60%" }}>
                    <div className="col-md-12">
                        <h3 style={{ textAlign: "center", color: "grey" }}> SEARCH EXISTING BOOKS BY TITLE/ISBN/AUTHOR/CATEGORY </h3> <br></br>
                        <center>
                            <form onSubmit={this.handleSearch}>
                                <input type="text" 
                                       onChange={this.onChange} 
                                       placeholder="SEARCH EXISTING BOOKS BY TITLE/ISBN/AUTHOR/CATEGORY" 
                                       name="search" 
                                       style={{ width: "80%", height: "40px"}} 
                                       value={this.state.search}
                                />
                                <button type="submit" style={{ height: "40px", backgroundColor: "rgb(241, 179, 8)", border: "yellow" }}><i class="fa fa-search"></i> SEARCH  </button>
                            </form>
                        </center>
                        <br />
                        <div className="results" style={{ backgroundColor: "rgba(0, 128, 0, 0.075)" }}>
                            <br></br><h3 style={{ marginLeft: "2%", color: "grey" }}> RESULTS </h3>
                            {search}
                            { this.state.searchBooks.map(book =>
                            
                            <table style={{borderCollapse:"separate", borderSpacing:"2em"}}>
                                <tr>
                                    <td> 
                                    <b>Title: </b>{book.title} <br/>
                                    <b>Author: </b>{book.author} <br/>
                                    <b>ISBN: </b>{book.isbn} <br/>
                                    <b>Category: </b>{book.category} <br/>
                                    <b>Description: </b>{book.description} <br/>
                                    <b>Price: </b> {book.price} 
                                    <br/>
                                    </td>
                                <td>
                                <form onSubmit={() => this.editBook(book.id)}>
                                <input type="submit" className="btn btn-info btn-block mt-4" value="EDIT"  style={{backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "100%", float: "left"}} />
                                </form>
                                </td>
                                <td>
                                <form onSubmit={() => this.removeBook(book.id)}>
                                <input type="submit" className="btn btn-info btn-block mt-4" value="REMOVE"  style={{backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "100%", float: "left"}} />
                                </form>
                                </td>
                                </tr>
                            </table>
                                
                            )}
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