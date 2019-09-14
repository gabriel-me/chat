import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendMessage } from './actionButton'
import Chat from '../../components/chat/Chat'

const username = window.localStorage.getItem('username')

const ChatContainer = props => {
  const onSubmit = event => {
    event.preventDefault()
    props.sendMessage(document.querySelector('input').value)
  }
  return <Chat submit={onSubmit} user={username} />
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { sendMessage },
  dispatch
)

export default connect(null, mapDispatchToProps)(ChatContainer)