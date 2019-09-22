import React from 'react'
import Li from './Li'
import { User } from '../utils/icons/User'
import { Favorite } from '../utils/icons/Favorite'
import './menu.css'

export default props => 
  <div className="menu">
    <header id="logo">
      <h1>Random <span id="chat">Chat</span></h1>
    </header>
    <section>
      <header>
        <Favorite color="#D8D8D8" />
        <h1>Top 5 Mais Ativos</h1>
      </header>
      <ul>
        {props.topUsers
          ? props.topUsers.map((user, i) =>
            <Li key={i} total={user.total} text={user.author} color="#D8D8D8" backgroundColor={user.color} />)
          : ''
        }
      </ul>
    </section>
    <section>
      <header>
        <User color="#D8D8D8" />
        <h1>Usuários Cadastrados</h1>
      </header>
      <ul>
        {props.users 
          ? props.users.map((user, i) => 
            <Li key={i} text={user.author} color="#D8D8D8" backgroundColor={user.color} />) 
          : ''
        }
      </ul>
    </section>
  </div>