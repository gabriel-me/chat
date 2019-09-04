import React from 'react'
import Header from '../header/Header'
import Messages from '../../containers/messages/Messages'
import Footer from '../footer/Footer'
import './chat.css'

const user = window.localStorage.getItem('id')

export default () => 
  <div className="chat">
    <Header name={user} src="profile.png"/>
    <Messages />
    <Footer />
  </div>