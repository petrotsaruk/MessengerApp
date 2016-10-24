Meteor.methods({
  addMessage(message) {
    if( Meteor.user() ) {
      Messages.insert({
        text: message,
        userName: Meteor.user().profile.name,
        location: Meteor.user().profile.location
      });
    } else {
      alert("You must be logged in to send messages!");
    }
  },

  editProfile(email, userName, location) {
    Meteor.users.update(Meteor.userId(), {
      $set: {'emails': [{address: email}], 'profile': {name: userName, location: location} }
    });
  }
});
