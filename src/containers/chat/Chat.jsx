import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendMessage } from './actionButton'
import Chat from '../../components/chat/Chat'

const username = window.localStorage.getItem('username')

const ChatContainer = props => {
  const onSubmit = event => {
    event.preventDefault()

    const $inputMessage = document.querySelector('input')
    const message = $inputMessage.value
    const messageLength = message.length

    const spaceKeyboard = [...message].filter(i => i === ' ')
    const spaceLength = spaceKeyboard.length;

    if (messageLength !== spaceLength)
      props.sendMessage(message)
  }
  return <Chat submit={onSubmit} user={username} />
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { sendMessage },
  dispatch
)

export default connect(null, mapDispatchToProps)(ChatContainer)