import React from 'react'
import Header from '../header/Header'
import Messages from '../../containers/messages/Messages'
import Footer from '../footer/Footer'
import './chat.css'

export default () => 
  <div className="chat">
    <Header name="Gabriel Marques" />
    <Messages />
    <Footer />
  </div>