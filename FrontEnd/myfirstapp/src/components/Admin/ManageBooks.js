import React, { Component } from "react";
import Book from "../Books/Book";

class ManageBooks extends Component{
    render (){
        return(
            
            <div className="Books">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Search existing books by title/ISBN/author</h1>
                        {
                            //Search Bar
                        }
                        <div className="searchbar" style={{width: "23%", position: "absolute", top: "20%", left:"50%", transform: "translate(-50%, -50%)"}}>
                        <form class="search" style={{width: "100%", position: "relative", display: "flex"}}>
                        <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="container p-3 my-3 border">
                        <h1>Results</h1>
                        </div>
                        <hr />
                        <div className="container p-3 my-3 border">
                        <h1>All Listings</h1>
                            <div className="row">
                                <div class="col">
                                <input type="radio" class="radio" name="x" value="y" id="y" />
                                <label for="y">All</label>
                                </div>
                                <div class="col">
                                <input type="radio" class="radio" name="x" value="y" id="y" />
                                <label for="y">Added</label>
                                </div>
                                <div class="col">
                                <input type="radio" class="radio" name="x" value="y" id="y" />
                                <label for="y">Removed</label>
                                </div>
                            </div>
                        <Book/>
                        <Book/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default ManageBooks;