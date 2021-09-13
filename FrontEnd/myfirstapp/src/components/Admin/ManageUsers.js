import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createNewUser} from "../../actions/securityActions";
import {getUserRequests, searchUserData, approveUserRequest, rejectUserRequest, blockUserAccount, unblockUserAccount, editUserDetails} from "../../actions/adminActions";

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
            editfn: "",
            editadd: "",
            editnumb: "",
            editabn: "",
            change: ""
        };
        this.onChange = this.onChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleApproval = this.handleApproval.bind(this);
        this.handleRejection = this.handleRejection.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        if (nextProps.errors){
            this.setState ({
                errors: nextProps.errors
            });
    
        }
    }
    
    componentDidMount() {
        this.props.getUserRequests().then(res => {
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
          alert("User Added!")
          window.location.reload();
      }

    handleSearch = event => {
        event.preventDefault();
        this.props.searchUserData(this.state.search).then(res => {
            const searchUser = res.data;
            this.setState({ searchUser });
          })
          this.state.edit = "false";
      }

    submitEdit = event => {
        event.preventDefault();
        const editUser = {
            fullName: this.state.editfn,
            password: this.state.change,
            abn: this.state.editabn,
            phone: this.state.editnumb,
            address: this.state.editadd,
          };
        this.props.editUserDetails(this.state.searchUser.username, editUser);
        alert("User details editted!")
        window.location.reload();
    }

    handleBlock = event => {
        event.preventDefault();
        this.props.blockUserAccount(this.state.searchUser.username);
        alert("User has been blocked!")
        window.location.reload();
    }

    handleUnblock = event => {
        event.preventDefault();
        this.props.unblockUserAccount(this.state.searchUser.username);
        alert("User has been unblocked!")  
        window.location.reload();
    }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRadioChange(event) {
        this.setState({ userType: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({change: event.target.value });
    }

    handleEdit (event){
        this.setState({ edit: event.target.value });

    }

    handleApproval(id) {
        this.props.approveUserRequest(id);
        window.location.reload();
    }

    handleRejection (id) {
        this.props.rejectUserRequest(id);
        window.location.reload();
    }

    render() {
        const { errors } = this.state;
        let result;
        let requestNum;
        let block;
        let userT;
        let editForm;
        let abnForm;
        let abnView;

        if (this.state.searchUser.userType == "shopOwner"){
            abnForm =
            <div className="form-group">
            <b> ABN  (Current = {this.state.searchUser.abn})</b>
            <input
                type="text"
                placeholder="ABN (If valid)"
                name="editabn"
                style={{width: "100%"}}
                value= {this.state.editabn}
                onChange = {this.onChange}
            />
            </div>
            abnView = <div>
                ABN: {this.state.searchUser.abn} <br></br>
            </div>
        }

        if (this.state.edit != "false"){
            editForm =
            <form onSubmit={this.submitEdit}>
                <h2> Fill form to edit, if left blank the current detail will remain unchanged. </h2>
                <b> FULL NAME (Current = {this.state.searchUser.fullName})</b>
                <div className="form-group">
                    <input
                        type="text"
                        name="editfn"
                        style={{ width: "100%" }}
                        value= {this.state.editfn}
                        onChange={this.onChange}
                    />
                </div>
                <b> CONTACT NUMBER (Current = {this.state.searchUser.phone}) </b>
                <div className="form-group">
                    <input
                        type="tel"
                        name="editnumb"
                        style={{ width: "100%" }}
                        value={this.state.editnumb}
                        onChange={this.onChange}
                    />
                </div>
                <b> ADDRESS (Current = {this.state.searchUser.address}) </b>
                <div className="form-group">
                    <input
                        type="text"
                        name="editadd"
                        style={{ width: "100%" }}
                        value={this.state.editadd}
                        onChange={this.onChange}
                    />
                </div>
                <b> PASSWORD </b> <br></br>
                <input type="radio" id="change" name="change" value= "default" onChange={this.handlePasswordChange}/>
                <label htmlFor="change">&nbsp;&nbsp; <b> Change to "default" </b> </label> 
                {abnForm}
                <input type="submit" className="btn btn-info btn-block mt-4" value="SUBMIT" style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "100%" }} />
            </form>

        } else {
            editForm = <b>
            Name: {this.state.searchUser.fullName} <br></br>
            Email Address: {this.state.searchUser.username} <br></br>
            User Type: {this.state.searchUser.userType} <br></br>
            Account Status: {this.state.searchUser.status} <br></br>
            Phone Number: {this.state.searchUser.phone} <br></br>
            {abnView}
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
                        <input type="submit" className="btn btn-info btn-block mt-4" value="APPROVE" onClick={() => this.handleApproval(request.username)} style={{backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "left"}} />
                        <input type="submit" className="btn btn-info btn-block mt-4" value="REJECT" onClick={() => this.handleRejection(request.username)} style={{ backgroundColor: "rgb(241, 179, 8)", border: "yellow", width: "40%", float: "right"}} />
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
                    <br></br>
                    </center>
                    </form>
                </div>
            </div>
        );
    }
}

ManageUsers.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    getUserRequests: PropTypes.func.isRequired,
    searchUserData: PropTypes.func.isRequired,
    approveUserRequest: PropTypes.func.isRequired,
    rejectUserRequest: PropTypes.func.isRequired,
    blockUserAccount: PropTypes.func.isRequired,
    unblockUserAccount: PropTypes.func.isRequired,
    editUserDetails: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    errors: state.errors
  });
  
export default connect(mapStateToProps, 
    { createNewUser, getUserRequests, searchUserData, approveUserRequest, rejectUserRequest, 
        blockUserAccount, unblockUserAccount, editUserDetails})
    (ManageUsers);