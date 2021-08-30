import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class ManageUsers extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            fullName: "",
            address: "",
            username: "",
            password: "",
            phone: "",
            errors: {}
        };

    }

    render() {
        return (
            <div className="ManageUsers">
                <div className="leftSide" style={{ marginLeft: "2%", float: "left", width: "30%", backgroundColor: "rgba(0, 128, 0, 0.075)"}}>
                    <br></br>
                    <h3 style={{marginLeft: "2%", color: "grey"}}> PENDING USER REQUESTS</h3> <br></br>
                    <div className="requests" style={{ width: "70%", marginLeft: "10%", fontWeight: "bold"}}>
                        Name: Jeff Smith <br></br>
                        Email: jsmithbooks@gmail.com <br></br>
                        Shop Name: J Smith Books inc. <br></br>
                        <input type="submit" className="btn btn-info btn-block mt-4" value="APPROVE" style={{backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "left"}} />
                        <input type="submit" className="btn btn-info btn-block mt-4" value="REJECT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "right"}} />
                    </div>
                    <br></br><br></br><br></br>
                    <div className="requests" style={{ width: "70%", marginLeft: "10%", fontWeight: "bold"}}>
                        Name: Jeff Smith <br></br>
                        Email: jsmithbooks@gmail.com <br></br>
                        Shop Name: J Smith Books inc. <br></br>
                        <input type="submit" className="btn btn-info btn-block mt-4" value="APPROVE" style={{backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "left"}} />
                        <input type="submit" className="btn btn-info btn-block mt-4" value="REJECT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "right"}} />
                    </div>
                    <br></br> <br></br><br></br>
                    <div className="requests" style={{ width: "70%", marginLeft: "10%", fontWeight: "bold"}}>
                        Name: Jeff Smith <br></br>
                        Email: jsmithbooks@gmail.com <br></br>
                        Shop Name: J Smith Books inc. <br></br>
                        <input type="submit" className="btn btn-info btn-block mt-4" value="APPROVE" style={{backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "left"}} />
                        <input type="submit" className="btn btn-info btn-block mt-4" value="REJECT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "right"}} />
                    </div>
                    <br></br><br></br><br></br>
                    <div className="requests" style={{ width: "70%", marginLeft: "10%", fontWeight: "bold"}}>
                        Name: Jeff Smith <br></br>
                        Email: jsmithbooks@gmail.com <br></br>
                        Shop Name: J Smith Books inc. <br></br>
                        <input type="submit" className="btn btn-info btn-block mt-4" value="APPROVE" style={{backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "left"}} />
                        <input type="submit" className="btn btn-info btn-block mt-4" value="REJECT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "right"}} />
                    </div>
                    <br></br><br></br><br></br><br></br>
                </div>
                <div style={{ float: "left", marginLeft: "3%", width: "60%" }}>
                    <h3 style={{ textAlign: "center",color: "grey" }}> SEARCH EXISTING USERS BY EMAIL USERNAMES </h3>
                    <form style={{ backgroundColor: "white" }}>
                        <input type="text" placeholder="SEARCH BY USERNAME/EMAIL ADDRESS" name="search" style={{ width: "80%", height: "40px" }} />
                        <button type="submit" style={{ height: "40px", backgroundColor: "rgb(241, 179, 8)", border: "yellow" }}><i class="fa fa-search"></i> SEARCH  </button>
                    </form>
                    <div className="results" style={{ backgroundColor: "rgba(0, 128, 0, 0.075)"}}>
                    <br></br><h3 style={{marginLeft: "2%", color:"grey"}}> RESULTS </h3>
                        <table style={{borderCollapse:"separate", borderSpacing:"2em"}}>
                            <tr>
                                <td> <b>
                                    Name: Cindy William <br></br>
                                    Email Address: borntoread@gmail.com <br></br>
                                    Shop Name: Born To Read <br></br>
                                    </b>
                                </td>
                                <td>
                                    <input type="submit" className="btn btn-info btn-block mt-4" value="EDIT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }} />
                                </td>
                                <td>
                                    <input type="submit" className="btn btn-info btn-block mt-4" value="BLOCK" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <b>
                                    Name: Cindy William <br></br>
                                    Email Address: borntoread@gmail.com <br></br>
                                    Shop Name: Born To Read <br></br>
                                </b>
                                </td>
                                <td>
                                    <input type="submit" className="btn btn-info btn-block mt-4" value="EDIT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }} />
                                </td>
                                <td>
                                    <input type="submit" className="btn btn-info btn-block mt-4" value="BLOCK" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <b>
                                    Name: Cindy William <br></br>
                                    Email Address: borntoread@gmail.com <br></br>
                                    Shop Name: Born To Read <br></br>
                                </b>
                                </td>
                                <td>
                                    <input type="submit" className="btn btn-info btn-block mt-4" value="EDIT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }} />
                                </td>
                                <td>
                                    <input type="submit" className="btn btn-info btn-block mt-4" value="BLOCK" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }} />
                                </td>
                            </tr>
                        </table>
                    </div> <br></br>
                    <form onSubmit={this.onSubmit} style={{ backgroundColor: "rgba(0, 128, 0, 0.075)" }}>
                    <h3 style={{color:"grey", textAlign: "center"}}> MANUAL ADD USER </h3> <br></br>
                        <div className="form-group" style={{float: "left"}}>
                            <input
                                type="text"
                                placeholder="FULL NAME"
                                name="fullName"
                                style={{width: "190%"}}
                                required
                            />
                        </div>
                        <div className="form-group" style={{float: "left", marginLeft: "18%"}}>
                            <input
                                type="email"
                                placeholder="USERNAME"
                                name="username"
                                style={{width: "190%"}}
                                required
                            />
                        </div>
                        <div className="form-group" style={{float: "left", marginLeft: "18%"}}>
                            <input
                            type="Phone"
                            placeholder="CONTACT NUMBER"
                            name="Phone"
                            style={{width: "190%"}}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="ADDRESS"
                                name="address"
                                style={{width: "100%"}}
                                required
                            />
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" value="ADD USER" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", wdith: "10%" }} />
                    </form>
                </div>
            </div>
        );

    }


}

export default ManageUsers;