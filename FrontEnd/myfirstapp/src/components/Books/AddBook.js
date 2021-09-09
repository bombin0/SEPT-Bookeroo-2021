import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AddBook extends Component {

    constructor(){
        super();

        this.state= {
        title: "",
        author: "",
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
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            price:this.state.price,
             
        }

        this.props.createListing(newListing, this.props.history);
    }

    render(){
        return (
            <div>
                <h1 className="display-4 text-center">Create New Listing</h1>
                <form onSubmit={this.onSubmit}>
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
        )
    }
}

AddBook.propTypes = {
    createProject: PropTypes.func.isRequired
  };

export default AddBook;