import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendMessage } from './actionButton'
import Header from '../header/Header'
import Messages from '../../containers/messages/Messages'
import Footer from '../footer/Footer'
import './chat.css'

const user = window.localStorage.getItem('id')

const Chat = props => {
  const onSubmit = event => {
    event.preventDefault()
    props.sendMessage(document.querySelector('input').value)
  }
  return (
    <form onSubmit={onSubmit} className="chat">
      <Header name={user} src="profile.png" />
      <Messages />
      <Footer />
    </form>
  )
}
  
const mapDispatchToProps = dispatch => bindActionCreators(
  { sendMessage },
  dispatch
)

export default connect(null, mapDispatchToProps)(Chat)