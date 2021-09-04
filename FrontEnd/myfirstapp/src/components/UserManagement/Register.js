import React, { Component } from "react";
import {createNewUser} from "../../actions/securityActions";
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      userType: "customer",
      status: "active",
      abn: "NONE",
      phone: "",
      address: "",
      optional: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.errors){
        this.setState ({
            errors: nextProps.errors
        });

    }
}

  onSubmit(e) {
    e.preventDefault();
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
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className= {classnames("form-control form-control-lg", {
                        "is-invalid": errors.fullName
                    }) }
                    placeholder="Name"
                    name="fullName"
                    value= {this.state.fullName}
                    onChange = {this.onChange}
                    required
                  />
                  {errors.fullName && (
                      <div className= "invalid-feedback">{errors.fullName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className= {classnames("form-control form-control-lg", {
                        "is-invalid": errors.username
                    }) }
                    placeholder="Username"
                    name="username"
                    value= {this.state.username}
                    onChange = {this.onChange}
                    required
                  />
                  {errors.username && (
                      <div className= "invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Address"
                    name="address"
                    value= {this.state.address}
                    onChange = {this.onChange}
                    required
                  /> 
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="Phone"
                    name="phone"
                    value= {this.state.phone}
                    onChange = {this.onChange}
                    required
                  /> 
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value= {this.state.password}
                    onChange = {this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value= {this.state.confirmPassword}
                    onChange = {this.onChange}
                    required
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" style={{backgroundColor:"rgb(241, 179, 8)",border:"yellow"}}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { createNewUser })(Register);