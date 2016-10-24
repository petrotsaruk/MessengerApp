import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class EditProfileForm extends TrackerReact(Component) {

  editProfile(event) {
    event.preventDefault();

    let user = Meteor.user();
    let email = this.refs.email.value.trim() ? this.refs.email.value.trim() : user.emails[0].address,
        userName = this.refs.username.value.trim() ? this.refs.username.value.trim() :
        (user.profile.name ? user.profile.name : user.emails[0].address),
        location = this.refs.location.value.trim();

    Meteor.call('editProfile', email, userName, location, error => {
      if(error){
        alert(error);
      } else {
        alert("You have edited your profile!");
        FlowRouter.go("/");
      }
    });
  }

  editPassword(event) {
    event.preventDefault();

    let oldPassword = this.refs.oldPass.value.trim(),
        newPassword = this.refs.newPass.value.trim(),
        confirmPassword = this.refs.confirmPass.value.trim();

    if(newPassword === confirmPassword) {
      Accounts.changePassword(oldPassword, newPassword, error => {
        if(error) {
          alert(error);
        } else {
          alert("Password changed!");
          this.refs.oldPass.value = "";
          this.refs.newPass.value = "";
          this.refs.confirmPass.value = "";
        }
      });
    } else {
      alert("Passwords didn't match!");
      this.refs.oldPass.value = "";
      this.refs.newPass.value = "";
      this.refs.confirmPass.value = "";
    }
  }

  render() {
    let user = Meteor.user();

    if( Meteor.userId() ) {
      return (
        <div>
          <div>
            <h2>Edit profile</h2>
            <form onSubmit={this.editProfile.bind(this)}>
              Email: <br />
            <input type="text" ref="email" placeholder={user.emails[0].address} /><br />
              Username: <br />
            <input type="text" ref="username" placeholder={user.profile.name}/><br />
              Location: <br />
            <select ref="location" placeholder={user.profile.location}>
                <option value="location1">location1</option>
                <option value="location2">location2</option>
                <option value="location3">location3</option>
              </select><br />
              <input type="submit" value="Edit" />
            </form>
          </div>
          <div>
            <h2>Change password</h2>
            <form onSubmit={this.editPassword.bind(this)}>
              Old password: <br />
              <input type="password" ref="oldPass" /><br />
              New password: <br />
              <input type="password" ref="newPass" /><br />
              Confirm new password: <br />
              <input type="password" ref="confirmPass" /><br />
              <input type="submit" value="Change password" />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}
