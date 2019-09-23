import React from 'react'
import TextBox from '../utils/textbox/TextBox'
import './messages.css'

export default class extends React.Component {
  componentDidUpdate() {
    const $div = document.querySelector('.chat-messages')
    $div.scrollTop = $div.scrollHeight
  }

  render() {
    return (
      <div className="chat-messages">
        {this.props.messages.map((message, i) =>
          <TextBox
            key={i}
            author={message.author}
            text={message.message}
            type={(message.author !== this.props.username) ? '' : 'sender'}
            bgColor={(message.author !== this.props.username) ? '' : '#0080FF'}
            color={(message.author !== this.props.username) ? '' : '#FFFFFF'}
            userColor={message.color}
          />
        )}
      </div>
    )
  }
}