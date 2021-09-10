import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {createNewUser} from "../../actions/securityActions";
import axios from "axios";

class ManageUsers extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            fullName: "",
            address: "",
            username: "",
            password: "default",
            confirmPassword: "default",
            userType: "",
            status: "active",
            phone: "",
            abn: "",
            errors: {},
            requests: [],
            searchUser: [],
            id: "",
            optional: "",
            edit: "false",
            fn1: ""
        };
        this.onChange = this.onChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8080/api/users/userRequests`)
          .then(res => {
            const requests = res.data;
            this.setState({requests });
          })
           
      }

    handleAdding = event => {
        event.preventDefault();
        const newUser = {
          username: this.state.username,
          fullName: this.state.fullName,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          userType: this.state.userType,
          status: this.state.status,
          abn: this.state.abn,
          phone: this.state.phone,
          address: this.state.address,
          optional: this.state.optional
        };
    
          this.props.createNewUser(newUser, this.props.history);
          window.location.reload();
      }

    handleSearch = event => {
        event.preventDefault();
        axios.get(`http://localhost:8080/api/users/searchUser/${this.state.search}`)
          .then(res => {
            const searchUser = res.data;
            this.setState({ searchUser });
          })
          this.state.edit = "false";
      }

    submitEdit = event => {
        console.log(this.state.fn1);
        event.preventDefault();
        axios.post("http://localhost:8080/api/users/editUser", this.state.searchUser);
    }

      handleBlock = event => {
        event.preventDefault();
        const res =  axios.post(`http://localhost:8080/api/users/blockUser/${this.state.searchUser.username}`);
        window.location.reload();
    }

      handleUnblock = event => {
        event.preventDefault();
        const res =  axios.post(`http://localhost:8080/api/users/unblockUser/${this.state.searchUser.username}`);
        window.location.reload();  
    }
    
      onChange(e) {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
      }

      handleRadioChange(event) {
          this.setState({ userType: event.target.value });
    }

    handleEdit (event){
        this.setState({ edit: event.target.value });

    }

    render() {
        const { errors } = this.state;
        let result;
        let requestNum;
        let block;
        let userT;
        let editForm;
        let abnForm;

        if (this.state.searchUser.userType == "shopOwner"){
            abnForm =
            <div className="form-group">
            <b> ABN </b>
            <input
                type="text"
                placeholder="ABN (If valid)"
                name="abn"
                style={{width: "100%"}}
                required
                value= {this.state.searchUser.abn}
                onChange = {this.onChange}
            />
        </div>
        }

        if (this.state.edit != "false"){
            editForm =
            <form onSubmit={this.submitEdit}>
                <b> FULL NAME </b>
                <div className="form-group">
                    <input
                        type="text"
                        name="fn"
                        style={{ width: "100%" }}
                        required
                        value= {this.state.searchUser.fullName}
                        onChange={this.onChange}
                    />
                </div>
                <b> USERNAME </b>
                <div className="form-group">
                    <input
                        type="email"
                        name="uname"
                        style={{ width: "100%" }}
                        required
                        value={this.state.searchUser.username}
                        onChange={this.onChange}
                    />
                </div>
                <b> CONTACT NUMBER </b>
                <div className="form-group">
                    <input
                        type="tel"
                        name="telp"
                        style={{ width: "100%" }}
                        required
                        defaultValue={this.state.searchUser.phone}
                        onChange={this.onChange}
                    />
                </div>
                <b> ADDRESS </b>
                <div className="form-group">
                    <input
                        type="text"
                        name="homeAdd"
                        style={{ width: "100%" }}
                        required
                        defaultValue={this.state.searchUser.address}
                        onChange={this.onChange}
                    />
                </div>
                <b> PASSWORD </b>
                <div className="form-group">
                    <input
                        type="text"
                        name="pass"
                        style={{ width: "100%" }}
                        required
                        defaultValue={this.state.searchUser.password}
                        onChange={this.onChange}
                    />
                </div>
                {abnForm}
                <input type="submit" className="btn btn-info btn-block mt-4" value="SUBMIT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "100%" }} />
            </form>

        } else {
            editForm = <b>
            Name: {this.state.searchUser.fullName} <br></br>
            Email Address: {this.state.searchUser.username} <br></br>
            User Type: {this.state.searchUser.userType} <br></br>
              </b>
        }

        if (this.state.userType == "shopOwner"){
            userT = 
            <div className="form-group">
            <input
                type="text"
                placeholder="ABN (If valid)"
                name="abn"
                style={{width: "60%"}}
                required
                value= {this.state.abn}
                onChange = {this.onChange}
            />
        </div>
        } 

        if (this.state.requests.length == 0){
            requestNum = <h5 style={{color:"red"}}> <center> No pending requests. </center> </h5>
        }
        if (this.state.searchUser.status == "block"){
            block = <input type="submit" className="btn btn-info btn-block mt-4" value="UNBLOCK" onClick={this.handleUnblock} style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }} />
        } else {
            block = <input type="submit" className="btn btn-info btn-block mt-4" value="BLOCK" onClick={this.handleBlock} style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }} />
        }
        if (this.state.searchUser.length == 0){
            result = <h5 style={{color:"red"}}> <center> No search results. Please enter your search above. </center> <br></br> </h5>
        } else{ 
            result = <table style={{borderCollapse:"separate", borderSpacing:"2em"}}><tbody>
                    <tr> 
                        <td> 
                            {editForm}
                        </td>
                        <td>
                            <input type="submit" className="btn btn-info btn-block mt-4" value="EDIT" onClick={this.handleEdit} style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow" }} />
                        </td>
                        <td>
                            {block}
                        </td>
                    </tr></tbody>
                    </table>
        }
        return (
            <div className="ManageUsers mt-4">
                <div className="leftSide" style={{ marginLeft: "2%", float: "left", width: "30%", backgroundColor: "rgba(0, 128, 0, 0.075)"}}>
                    <br></br>
                    <h3 style={{marginLeft: "2%", color: "grey"}}> PENDING USER REQUESTS</h3> <br></br>
                    <div className="requests" style={{ width: "70%", marginLeft: "10%", fontWeight: "bold"}}>
                        {requestNum}
                        { this.state.requests.map(request => <><br></br>Name: {request.fullName} <br></br>Email Address: {request.username} <br></br>User Type: {request.userType}<br></br>
                        <input type="submit" className="btn btn-info btn-block mt-4" value="APPROVE" onClick={() => handleApproval(request.username)} style={{backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "left"}} />
                        <input type="submit" className="btn btn-info btn-block mt-4" value="REJECT" onClick={() => handleRejection(request.username)} style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "right"}} />
                        <br></br> <br></br>
                        </>)}
                        <br></br> <br></br>
                    </div>
                </div>
                <div style={{ float: "left", marginLeft: "3%", width: "60%" }}>
                    <h3 style={{ textAlign: "center",color: "grey" }}> SEARCH EXISTING USERS BY EMAIL USERNAMES </h3>
                    <form onSubmit={this.handleSearch} style={{ backgroundColor: "white" }}>
                        <input type="text" value={this.state.search} onChange = {this.onChange} placeholder="SEARCH BY USERNAME/EMAIL ADDRESS" name="search" style={{ width: "80%", height: "40px" }} />
                        <button type="submit" style={{ height: "40px", backgroundColor: "rgb(241, 179, 8)", border: "yellow" }}><i class="fa fa-search"></i> SEARCH  </button>
                    </form>
                    <br/>
                    <div className="results" style={{ backgroundColor: "rgba(0, 128, 0, 0.075)"}}>
                    <br></br><h3 style={{marginLeft: "2%", color:"grey"}}> RESULTS </h3>
                        {result}
                    </div> <br></br>
                    <form onSubmit={this.handleAdding} style={{ backgroundColor: "rgba(0, 128, 0, 0.075)" }}><br></br>
                    <h3 style={{color:"grey", textAlign: "center"}}> MANUAL ADD USER </h3> <br></br>
                    <center>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="FULL NAME"
                                name="fullName"
                                style={{width: "60%"}}
                                required
                                value= {this.state.fullName}
                                onChange = {this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="USERNAME"
                                name="username"
                                style={{width: "60%"}}
                                required
                                value= {this.state.username}
                                onChange = {this.onChange}
                            />
                        </div>
                        <div className="form-group">
                        <input
                                type="tel"
                                placeholder="CONTACT NUMBER"
                                name="phone"
                                style={{width: "60%"}}
                                required
                                value= {this.state.phone}
                                onChange = {this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="ADDRESS"
                                name="address"
                                style={{width: "60%"}}
                                required
                                value= {this.state.address}
                                onChange = {this.onChange}
                            />
                        </div>
                        <input type="radio" id="customer" name="userType" value= "customer" onChange={this.handleRadioChange}/>
                        <label htmlFor="customer">&nbsp; <b>CUSTOMER </b> </label> &nbsp;&nbsp;
                        <input type="radio" id="shopowner" name="userType" value="shopOwner" onChange={this.handleRadioChange}/>
                        <label htmlFor="css"> &nbsp; <b> SHOP OWNER </b> </label><br></br>
                        {userT}
                        <input type="submit" className="btn btn-info btn-block mt-4" value="ADD USER" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "15%" }} />
                    </center>
                    </form>
                </div>
            </div>
        );
    }
}
const handleApproval = async id => {
    const res = await axios.get(`http://localhost:8080/api/users/approve/${id}`);
    window.location.reload();
}

const handleRejection = async id => {
    const res = await axios.get(`http://localhost:8080/api/users/reject/${id}`);
    window.location.reload();
}



ManageUsers.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    errors: state.errors
  });
  
export default connect(mapStateToProps, { createNewUser })(ManageUsers);