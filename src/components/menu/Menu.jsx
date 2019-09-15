import React from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../utils/icons/Close'
import Li from './Li'
import './menu.css'

export default props => 
  <div className="menu">
    <header>
      <h1>{props.name || ''}</h1>
      <Link to="/"><Close color="#BDBDBD" /></Link>
    </header>
    <section>
      <header>
        <h1>Usuários</h1>
      </header>
      <ul>
        {props.users 
          ? props.users.map((user, i) => 
            <Li key={i} text={user.name} backgroundColor={user.color} color="#BDBDBD" />) 
          : ''
        }
      </ul>
    </section>
  </div>