import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";
import setAuthToken from "./redux/utils/setAuthToken";
import { setCurrentUser} from "./redux/actions/authActions";
// import store from './redux/store.js';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import RestaurantPage from './pages/restaurantpage/restaurantpage.component';
import OrdersPage from './pages/orderspage/orderspage.component';
import AnalyticsPage from './pages/analyticspage/analyticspage.component';
import ShopPage from './pages/shop/shop.component';
import MenuUpdate from './pages/menu-update/menu-update.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import {selectCurrentUser} from './redux/user/user.selectors';
import FeedbacksPage from './pages/feedbackpage/feedbackpage.component';
import UserFeedback from './pages/userfeedback/userfeedback.component';
import AddMenu from './pages/add-menu/add-menu.component';
import Authentication from './pages/authentication/authentication.component';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from "./components/private-route/PrivateRoute";

console.log(localStorage)
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  //store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    //store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends React.Component {
  unsubscribeFromAuth = null;

  // componentDidMount() {  

  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <Switch>
      <div>
          <Header/>
          <Route exact path='/' component={HomePage} />
          <Route exact path = '/checkout' component={CheckoutPage} />
          <Route exact path = '/restaurant' component={RestaurantPage} />
          <Route exact path = '/analytics' component={AnalyticsPage} />
          <Route exact path = '/orders' component={OrdersPage} />
          <Route exact path = '/menu-update' component={MenuUpdate} />
          <Route exact path = '/feedback' component={FeedbacksPage} />
          <Route exact path = '/userfeedback' component={UserFeedback} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          <Route path='/add-menu' component={AddMenu} />
          <Route path='/auth' component={Authentication} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
      </div>
      </Switch>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);