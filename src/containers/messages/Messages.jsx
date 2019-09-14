import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import io from 'socket.io-client'
import { currentMessages } from './actionMessages'
import Messages from '../../components/messages/Messages'

const username = window.localStorage.getItem('username')
let justOne = true

const MessagesContainer = props => {
  if (justOne) {
    justOne = false
    const URL_API = 'http://localhost:8082'
    const socket = io(URL_API)
    socket.on('previousMessages', messages => {
      props.currentMessages(messages)
    })
  }
  
  return <Messages username={username} messages={[...props.allMessages.texts]} />
}

const mapStateToProps = state => 
  ({ allMessages: state.messages })

const mapDispatchToProps = dispatch => 
  bindActionCreators({ currentMessages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)