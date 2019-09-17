import React from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Close'
import { Annexe } from '../utils/icons/Annexe'
import './header.css'

export default props => 
  <header className="chat-header">
    <h1>Logado como: <span>{props.username}</span></h1>
    <div>
      <span><Annexe /></span>
      <Link to="/"><span><Close color="#DF013A"/></span></Link>
    </div>
  </header>