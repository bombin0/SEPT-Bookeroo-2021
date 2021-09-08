import React, { Component } from 'react'

class Book extends Component {
    render() {
        return (
            <div className="container">
                            <div className="card card-body bg-light mb-3">
                                <div className="row">
                                    <div className="col-2">
                                        <span className="mx-auto">REACT</span>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-8">
                                        <h3>Title</h3>
                                        <p>Book Info</p>
                                    </div>
                                    <div className="col-md-4 d-none d-lg-block">
                                        <ul className="list-group">
                                                <li className="list-group-item update">
                                                    <i className="fa fa-edit pr-1">Select</i>
                                                </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
}
export default Book;
