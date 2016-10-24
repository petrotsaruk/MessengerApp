import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Accounts} from 'meteor/accounts-base';

export default class ProfileForm extends TrackerReact(Component) {

  loginUser(event) {
    event.preventDefault();

    let email = this.refs.email.value.trim(),
        password = this.refs.pass.value.trim();

    Meteor.loginWithPassword(email, password, (error)=> {
      if(error) {
        alert(error);
      } else {
        FlowRouter.go('/');
      }
    });
  }

  logoutUser(event) {
    Meteor.logout((error) => {
      if(error) {
        alert(error);
      }
    });
  }

  render() {
    let user = Meteor.user();

    if(!user){
      return (
        <div>
          <h2>Login</h2>
          <div>
            If you don't have an account, please <a href="/register">register.</a>
          </div>
          <form onSubmit={this.loginUser.bind(this)}>
            Email: <br />
            <input type="text" ref="email" placeholder="Enter your email..." /><br />
            Password: <br />
            <input type="password" ref="pass" placeholder="Enter your password..." /><br />
            <input type="submit" value="Enter" />
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Profile</h2>
          <form>
            Email: <br />
            <input type="text" value={user.emails[0].address} readOnly /><br />
            Username: <br />
            <input type="text" value={user.profile.name} readOnly /><br />
            Location: <br />
            <input type="text" value={user.profile.location} readOnly /><br />
            <a href="/editprofile">Edit profile</a> | <a href="/">Go To MessengerApp</a><br />
            <button onClick={this.logoutUser.bind(this)}>Logout</button>
          </form>
        </div>
      );
    }
  }
}
