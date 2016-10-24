import React, {Component} from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import MessagesWrapper from './messages/MessagesWrapper.jsx';
import RegisterForm from './profile/RegisterForm.jsx';
import ProfileForm from './profile/ProfileForm.jsx';
import EditProfileForm from './profile/EditProfileForm.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<MessagesWrapper />)
    })
  }
});

FlowRouter.route('/register', {
  action() {
    mount(MainLayout, {
      content: (<RegisterForm />)
    })
  }
});

FlowRouter.route('/profile', {
  action() {
    mount(MainLayout, {
      content: (<ProfileForm />)
    })
  }
});

FlowRouter.route('/editprofile', {
  action() {
    mount(MainLayout, {
      content: (<EditProfileForm />)
    })
  }
});
