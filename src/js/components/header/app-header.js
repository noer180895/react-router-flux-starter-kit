/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var auth = require('../../stores/app-auth'); // TODO / USE DISPATCHER & ACTIONS
var Login = require('../auth/app-login');
var AppActions = require('../../actions/app-actions.js');
var AuthStore = require('../../stores/app-auth.js');
var FbOauthStore = require('../../stores/app-fboauth');
var Link = Router.Link;


var Header = React.createClass({
  getInitialState: function () {
    return {
      loggedIn: AuthStore.authLoggedIn()
    };
  },
  setStateOnAuth: function (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },
  componentWillMount: function () {
    AuthStore.authOnChange(this.setStateOnAuth);
    FbOauthStore.authOnChange(this.setStateOnAuth)
    
  },
  render: function () {
    var loginOrOut = this.state.loggedIn ?
      <Link to="logout">Log out</Link> :
      <Link to="login">Sign in</Link>;
    return (
      <div>
        <h1 className="breadcrumbs"><a href="http://www.github.com/przeor/react-router-flux-starter-kit">React Router Flux Starter Kit</a> / Auth Flow with Well Orginized Flux Architecture </h1>
        <ul className="nav nav-tabs">
          <li>{loginOrOut}</li>
          <li><Link to="about">About</Link></li>
          <li><Link to="dashboard">Schedule Dashboard</Link></li>
        </ul>
        <br/>
      </div>
    );
  }
});




module.exports = Header;



