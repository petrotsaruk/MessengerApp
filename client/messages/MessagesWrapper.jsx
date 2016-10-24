import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import MessagesForm from './MessagesForm.jsx';
import MessageSingle from './MessageSingle.jsx';

Messages = new Mongo.Collection("messages");

export default class MessagesWrapper extends TrackerReact(Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        messages: Meteor.subscribe("allMessages")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.messages.stop();
  }

  messages() {
    let user = Meteor.user();

    return Messages.find({location: user && user.profile && user.profile.location}).fetch();
  }

  render() {
    return (
      <div>
        <a href="/profile">View profile</a><br />
        <MessagesForm />
        <ul>
          {this.messages().map((message)=>{
            return <MessageSingle key={message._id} message={message} />
          })}
        </ul>
      </div>
    );
  }
}
