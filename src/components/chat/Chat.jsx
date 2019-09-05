import React from 'react'
import Header from '../header/Header'
import Messages from '../../containers/messages/Messages'
import Footer from '../footer/Footer'
import './chat.css'

export default props => 
  <form onSubmit={props.submit} className="chat">
    <Header name={props.user} src="profile.png" />
    <Messages />
    <Footer />
  </form>