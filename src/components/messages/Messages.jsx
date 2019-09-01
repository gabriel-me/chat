import React from 'react'
import TextBox from '../utils/textbox/TextBox'
import './messages.css'

export default props => 
  <div className="chat-messages">
    {props.messages.map((message, i) => <TextBox key={i} text={message} />)}
  </div>