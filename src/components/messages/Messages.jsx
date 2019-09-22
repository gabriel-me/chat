import React from 'react'
import TextBox from '../utils/textbox/TextBox'
import './messages.css'

export default props =>
  <div className="chat-messages">
    {props.messages.map((message, i) =>
      <TextBox
        key={i}
        author={message.author}
        text={message.message}
        type={(message.author !== props.username) ? '' : 'sender'}
        bgColor={(message.author !== props.username) ? '' : '#0080FF'}
        color={(message.author !== props.username) ? '' : '#FFFFFF'}
        userColor={message.color}
      />
    )}
  </div>