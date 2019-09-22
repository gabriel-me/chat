import React from 'react'
import Li from './Li'
import './menu.css'

export default props => 
  <div className="menu">
    <header id="logo">
      <h1>Random <span id="chat">Chat</span></h1>
    </header>
    <section>
      <header>
        <h1>Usuários</h1>
      </header>
      <ul>
        {props.users 
          ? props.users.map((user, i) => 
            <Li key={i} text={user} color="#BDBDBD" />) 
          : ''
        }
      </ul>
    </section>
  </div>