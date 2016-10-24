import React, {Component} from 'react';

export default class MessageSingle extends Component {

  render() {
    return (
      <div>
        {this.props.message.userName} : {this.props.message.text}
      </div>
    );
  }
}
