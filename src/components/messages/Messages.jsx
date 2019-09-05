import React from 'react'
import TextBox from '../utils/textbox/TextBox'
import './messages.css'

export default props =>
  <div className="chat-messages">
    {props.messages.map((message, i) =>
      <TextBox
        key={i}
        text={message.message}
        type={(message.author !== props.user) ? '' : 'sender'}
        bgColor={(message.author !== props.user) ? '' : '#0080FF'}
        color={(message.author !== props.user) ? '' : '#FFFFFF'}
      />
    )}
  </div>