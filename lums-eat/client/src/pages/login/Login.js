//Code partially taken from https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import classnames from "classnames";
import Button from 'react-bootstrap/Button'
import './Login.styles.scss';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isRest: false,
      errors: {}
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

componentDidMount() {
  // If logged in and user navigates to Login page, should redirect them to dashboard
  if (this.props.auth.isAuthenticated) {
    if(!localStorage.isRest){
      this.props.history.push('/');}
     else {
      this.props.history.push("/restaurant");
    }
  }
}

handleChecked () {
  this.setState({isRest: !this.state.isRest});
}

UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      if(!localStorage.isRest){
        this.props.history.push("/");
      }
      else{
        this.props.history.push("/restaurant");
      }
       // push user to homepage when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: (this.state.email).toLowerCase(),
      password: this.state.password,
      isRest: this.state.isRest
    };
this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
render() {
    const { errors } = this.state;
return (
      <div className = 'check'>

      <div className="container">
        <div className="row">
          <div className="col s8">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12">
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link class = "colorc" to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}    
                </span>
              </div>
              <p style ={{ paddingLeft: "11.250px" }}>
              <label>
                <input class="filled-in checkbox-blue-grey" type="checkbox" onChange={ this.handleChecked }/>
                <span>Login as Restuarant?</span>
              </label>
              <p className="grey-text text-darken-1">
                  <Link class = "colorc" to="/reset-pass">Forgot your password?</Link>
              </p>
              </p>
              
              
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button variant="primary" type="submit" block>
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);