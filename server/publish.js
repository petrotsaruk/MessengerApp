Messages = new Mongo.Collection("messages");

Meteor.publish("allMessages", function() {
  return Messages.find();
});
