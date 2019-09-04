import React from 'react'
import TextBox from '../utils/textbox/TextBox'
import './messages.css'

const user = window.localStorage.getItem('id')

export default props => 
  <div className="chat-messages">
    {props.messages.map((message, i) => 
      <TextBox 
        key={i} 
        text={message.message} 
        type={(message.author !== user) ? '' : 'sender'} 
        bgColor={(message.author !== user) ? '' : '#0080FF'} 
        color={(message.author !== user) ? '' : '#FFFFFF'}
      />
    )}
  </div>