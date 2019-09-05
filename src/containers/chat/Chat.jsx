import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendMessage } from './actionButton'
import Chat from '../../components/chat/Chat'

const user = window.localStorage.getItem('id')

const ChatContainer = props => {
  const onSubmit = event => {
    event.preventDefault()
    props.sendMessage(document.querySelector('input').value)
  }
  return <Chat submit={onSubmit} user={user} />
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { sendMessage },
  dispatch
)

export default connect(null, mapDispatchToProps)(ChatContainer)