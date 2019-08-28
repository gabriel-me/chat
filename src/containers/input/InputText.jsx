import React from 'react'
import { connect } from 'react-redux'
import './input.css'

const InputText = props => {
  const resetValue = () => {
    if (props.messagesBody.texts) 
      document.querySelector('input').value = ''
  }

  resetValue()

  return (
    <input className="input-text" placeholder="Type a message..." />
  )
}

const mapStateToProps = state => ({
  messagesBody: state.messages
})

export default connect(mapStateToProps)(InputText)