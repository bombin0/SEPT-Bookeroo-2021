import React, { Component } from 'react'
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import {createPerson} from "../../actions/personActions";
import Harry from "../../images/Harry.jpg";
import pilgrim from "../../images/pilgrim.jpg";
import boy from "../../images/boy.jpg";
import top10 from "../../images/top10.png";
import Releases from "../../images/releases.jpg";
import rated from "../../images/rated.jpg";


class AddPerson extends Component {
    constructor(){
        super();
        this.state= {
        title: "",
        author: "",
        genre: "",
        description: "",
        price: "",
        coverArt: null,
        contents: null,
        search: "",
        searchBooks: [],
    }; 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();
        const newListing = {
            title: this.state.title,
            author: this.state.author,
            genre: this.state.genre,
            description: this.state.description,
            price:this.state.price,  
        }
        axios.post("http://localhost:8080/api/books/save", newListing);
        window.location.reload();

    }

    onFileUpload(e){
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

    render() {
      let search;
        return (
            <div className="Listing">
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
                            <h6 style={{color: "grey" }}>Add a Book cover Page</h6>
                            <div className="form-group">
                            <input type="file" 
                                   id="coverPage" 
                                   name="coverPage" 
                                   value={this.state.coverArt}
                                   onChange={this.onFileUpload}
                                   required/>
                            </div>
                            <h6 style={{color: "grey" }}>Add Book Content Page</h6>
                            <div className="form-group">
                            <input type="file" 
                                   id="contentPage" 
                                   name="contentPage"
                                   value={this.state.contents}
                                   onChange={this.onFileUpload}
                                   required/>
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" value="Create Listing" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "25%" }} />
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
                                       style={{ width: "80%", height: "40px"}} 
                                       value={this.state.search}
                                />
                                <button type="submit" style={{ height: "40px", backgroundColor: "rgb(241, 179, 8)", border: "yellow" }}><i class="fa fa-search"></i> SEARCH  </button>
                            </form>
                        </center>
                        <br />
                        <div>
                            
                            {search}
                            { this.state.searchBooks.map(book =>
                            
                            <table style={{borderCollapse:"separate", borderSpacing:"2em"}}>
                                <tr>
                                    <td> 
                                    <b>Title: </b>{book.title} <br/>
                                    <b>Author: </b>{book.author} <br/>
                                    <b>Category: </b>{book.category} <br/>
                                    <b>Description: </b>{book.description} <br/>
                                    <b>Price: </b> {book.price}<br/>
                                    </td>
                                </tr>
                            </table>      
                            )}
                            <br></br>
                       </div>
                       <div>
                          <table style={{borderCollapse:"separate", borderSpacing:"2em"}}>
                            <tc>
                              <b><img src={Harry} style={{width:"20%"}}/></b><br/>
                              <b>Title: Harry Potter</b><br/>
                              <b>J.K Rowling</b><br/>
                              <b>Fantasy</b><br/>
                              <b>$24.95</b><br/>
                            </tc>
                            <tc>
                              <b><img src={pilgrim} style={{width:"20%"}}/></b><br/>
                              <b>I am Pilgrim</b><br/>
                              <b>Terry Hayes</b><br/>
                              <b>Crime</b><br/>
                              <b>$28.55</b><br/>
                            </tc>
                            <tr>
                              <b><img src={boy} style={{width:"20%"}}/></b><br/>
                              <b>Boy Swallows Univers</b><br/>
                              <b>Trent Dalton</b><br/>
                              <b>bildungsroman</b><br/>
                              <b>$21.99</b><br/>
                            </tr>
                          </table>        
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

