import React from 'react'
import { connect } from 'react-redux'
import TextBox from '../utils/textbox/TextBox'
import './body.css'

const Body = props => {
  const renderMessages = messages => 
    [...messages].map((message, i) => <TextBox key={i} text={message} />)

  const getMessages = () => {
    const messages = props.messagesBody.texts
    return renderMessages(messages)
  } 

  return (
    <div className="chat-body">{getMessages()}</div>
  )  
}

const mapStateToProps = state => ({
  messagesBody: state.messages
})

export default connect(mapStateToProps)(Body)