import React from 'react'
import { connect } from 'react-redux'
import Messages from '../../components/messages/Messages'

const MessagesContainer = props => {

  const getMessages = () => {
    const messages = props.allMessages.texts
    return [...messages]
  }

  return (
    <Messages messages={getMessages()} />
  )
}

const mapStateToProps = state => ({
  allMessages: state.messages
})

export default connect(mapStateToProps)(MessagesContainer)