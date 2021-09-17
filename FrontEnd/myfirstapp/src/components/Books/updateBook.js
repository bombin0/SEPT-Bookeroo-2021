import React, { Component } from 'react';
import bookService from "./services/bookService";

class updateBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: "",
            author: "",
            description: "",
            price: "",
            rating: 0,
            isbn: "",
            category: "",
            coverArt: null,
            contents: null,
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeDescriprionHandler = this.changeDescriprionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeISBNHandler = this.changeISBNHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }
    componentDidMount(){
        bookService.getBookById(this.state.id).then( (res) =>{
            let book = res.data;
            this.setState({
                title: book.title,
                author: book.author,
                description: book.description,
                price: book.price,
                isbn: book.isbn,
                rating: book.rating,
                category: book.category,
            });
        });
    }

    updateBook = (e) => {
        e.preventDefault();
        let book = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            price: parseFloat(this.state.price),
            isbn: this.state.isbn,
            rating: this.state.rating,
            category: this.state.category,
       };
        console.log('book => ' + JSON.stringify(book));
        console.log('id => ' + JSON.stringify(this.state.id));
        bookService.updateBook(book, this.state.id).then( res =>{
            this.props.history.push('/adminManageBooks');
        });
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeAuthorHandler= (event) => {
        this.setState({author: event.target.value});
    }

    changeDescriprionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changePriceHandler= (event) => {
            this.setState({price: parseFloat(event.target.value)});
    }

    changeISBNHandler= (event) => {
        this.setState({isbn: event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    cancel(){
        this.props.history.push('/adminManageBooks');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Book</h3>
                                <h7 className="text-center"> Fill form to edit, if uneditted the current detail will remain unchanged. </h7>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Author: </label>
                                            <input placeholder="Author" name="author" className="form-control" 
                                                value={this.state.author} onChange={this.changeAuthorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriprionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ISBN: </label>
                                            <input placeholder="ISBN" name="isbn" className="form-control" 
                                                value={this.state.isbn} onChange={this.changeISBNHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category: </label>
                                            <input placeholder="Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateBook}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default updateBook;