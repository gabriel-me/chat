import React from 'react'
import './signin.css'

export default props => 
  <form className="signin" onSubmit={props.submit}>
    <main>
      <header>
        <h1>Random Chat</h1>
        <h2>Escolha um apelido para começar</h2>
      </header>
      <input 
        type="text" 
        name="username" 
        placeholder="Digite seu apelido aqui" 
        maxLength="22" 
        required></input>
      <button>Começar agora</button>
    </main>
  </form>