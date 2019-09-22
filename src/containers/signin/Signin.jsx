import React from 'react'
import SignIn from '../../components/signin/Signin'

const signInValidation = e => {
  e.preventDefault()

  const $username = document.querySelector('form main input')

  if ($username.value !== '') {
    window.localStorage.setItem('username', $username.value)
    window.location.href = 'http://localhost:3000/chat'
  } else {
    alert('Nome de usuário invalido')
  }
}

export default () => 
  <SignIn submit={signInValidation} />