import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { login } from "../../actions/securityActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(LoginRequest);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <div className="col-md-8 m-auto">
          <br></br><br></br>
          <center>
            <i class="fa fa-user-circle fa-10x" style={{ color: "black" }}></i>
          </center>
          <br></br>
          <h4 className="display-12 text-center" style={{ color: "black", fontFamily: "Arial", fontWeight: "bold" }}> BOOKEROO LOG IN</h4>
          <br></br>
          <form  onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className={classnames("form-control form-control-lg", {
                "is-invalid": errors.username
                })}
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>
            <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block mt-5">Login </button>
            <br></br>
          </form>
          <center>
            <a href="/register" style={{ color: "black", fontFamily: "Arial" }}> New to BOOKEROO? Click here to register.</a>
            <br></br><br></br>
            <i class="fas fa-arrow-left"> <a href="/" style={{ color: "black", fontFamily: "Arial" }}>Back to homepage</a></i>
          </center>
        </div>
        <br></br><br></br>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security,
  errors: state.errors
});

export default connect(mapStateToProps,{ login })(Login);