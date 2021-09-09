import React, { Component } from 'react'
import PropTypes from "prop-types";
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
        name: "",
        author: "",
        genre: "",
        description: "",
        price: "",
        
     
    }; 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
        }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newListing = {
            name: this.state.title,
            author: this.state.author,
            genre: this.state.genre,
            description: this.state.description,
            price:this.state.price,
             
        }

        this.props.createListing(newListing, this.props.history);
    }
    render() {
        return (
            <div className="Listing">
            <div className="flex-container">
                <div className="flex-left">
                    <div className="col-md-10 m-center">
                        <h1 className="display-4 text-center">Create New Listing</h1>
                        <form onSubmit={this.onSubmit}>

                            <h6>Title:</h6>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg "
                                placeholder="Add Book Title" 
                                name="title"
                                value= {this.state.title}
                                onChange = {this.onChange}
                                />
                                
                            </div>
                            <h6>Author:</h6>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="Add Book Author"
                                name="author"
                                value= {this.state.author}
                                onChange = {this.onChange}
                                    />
                            </div>

                            <h6>Genre:</h6>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="Add Book Genre"
                                name="genre"
                                value= {this.state.genre}
                                onChange = {this.onChange}
                                    />
                            </div>
                          
                            <h6>Description:</h6>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" 
                                placeholder="Add Book Description"
                                name = "description"
                                value= {this.state.description}
                                onChange = {this.onChange}
                                />
                                

                            </div>
                            <h6>Price $</h6>
                            <div className="form-group">
                                <input type="price" className="form-control form-control-lg" 
                                name="price"
                                value= {this.state.price}
                                onChange = {this.onChange}
                                />
                            </div>
                            
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                     </div>   
                </div>

                <div className="flex-right">
                    
                <h1 className="display-4 text-center">My Listings</h1>  
 
                <table>
                  <tr>
                    <th></th>
                    <th>Title:</th>
                    <th>Author:</th>
                    <th>Genre:</th>
                    <th>Price:</th>
                </tr>
                <tr>
                  <td><img src={Harry} style={{width:"20%"}}/></td>
                  <td>Author: Harry Potter<br></br>Genre: Fantasy</td>
                  <td>J.K Rowling</td>
                  <td>Fantasy</td>
                  <td>$24.95</td>
                </tr>
                <tr>
                  <td><img src={pilgrim} style={{width:"20%"}}/></td>
                  <td>I am Pilgrim</td>
                  <td>Terry Hayes</td>
                  <td>Thriller / Crime</td>
                  <td>$28.55</td>
                </tr>
                <tr>
                  <td><img src={boy} style={{width:"20%"}}/></td>
                  <td>Boy Swallows Univers</td>
                  <td>Trent Dalton</td>
                  <td>bildungsroman</td>
                  <td>$21.99</td>
                </tr>
              </table>

                </div>
              
            </div>

            <div className="contact-space" style={{ backgroundImage: `url(${require("../../images/crumbled.jpg")})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
          <div className="flex-container" >
            <div className="contact-us-child">
              <h1> See what Books are popular!</h1>
            </div>

          </div>

          <div className="flex-container" >
            <div className="info-child">
              <img className="img" src={top10} style={{width:"200px"}}/>
              <h1> Top 10 Books</h1>
            </div>
            <div className="info-child">
              <img className="img" src={Releases} style={{width:"200px"}}/>
              <h1>New Popular Releases</h1>
            </div>
            <div className="info-child">
              <img className="img" src={rated} style={{width:"200px"}}/>
              <h1> Top Rated</h1>
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

