import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';

export default class RegisterForm extends Component {

  registerUser(event) {
    event.preventDefault();

    let email = this.refs.email.value.trim(),
        pass = this.refs.pass.value.trim(),
        confirmPass = this.refs.confirmPass.value.trim();

    if(email && pass && confirmPass){
      if(pass === confirmPass){
        Accounts.createUser({
          email: email,
          password: pass,
          profile: {
            name: null,
            location: null
          }
        }, function(err) {
          if(err) {
            alert(err);
          } else {
            FlowRouter.go("/profile");
          }
        });
      } else {
        alert("Passwords do not match!");
      }
    } else {
      alert("Please fill in all fields!");
    }
  }

  render() {
    return (
      <div>
        <h2>Registration</h2>
        <form onSubmit={this.registerUser.bind(this)}>
          Your email:
          <input
            type="text"
            ref="email"
            placeholder="Enter email here..." /><br />
          Your password:
          <input
            type="password"
            ref="pass"
            placeholder="Enter password here..." /><br />
          Confirm your password:
          <input
            type="password"
            ref="confirmPass"
            placeholder="Confirm password..." /><br />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}
