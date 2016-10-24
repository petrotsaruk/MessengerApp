import React, {Component} from 'react';

export default class MessagesForm extends Component {

  addMessage(event) {
    event.preventDefault();
    let text = this.refs.message.value.trim(),
        user = Meteor.user();

    if(user && user.profile && user.profile.location){
      if(text) {
        Meteor.call('addMessage', text, ()=> {
          this.refs.message.value = "";
        });
      } else {
        alert("You have to write something");
      }
    } else {
      alert("You have to choose your location");
    }
  }

  render() {
    return (
      <form className="new-message" onSubmit={this.addMessage.bind(this)}>
        <input
          type="text"
          ref="message"
          placeholder="Enter your message here..." />
      </form>
    )
  }
}
