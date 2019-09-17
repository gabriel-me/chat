import React from 'react'
import Menu from '../../containers/menu/Menu'
import Header from '../header/Header'
import Messages from '../../containers/messages/Messages'
import Footer from '../footer/Footer'
import './chat.css'

export default props => 
  <form onSubmit={props.submit} className="chat">
    <Menu />
    <div className="content">
      <Header username={props.user} src="profile.png" />
      <Messages />
      <Footer />
    </div>
  </form>