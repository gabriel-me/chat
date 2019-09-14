import React from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Close'
import './header.css'

export default props => 
  <header className="chat-header">
    <div>
      {props.src ? <img src={props.src} alt="People profile" /> : ''}
      <h1>{props.name}</h1>
    </div>
    <Link to="/"><span><Close /></span></Link>
  </header>