import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendMessage } from './actionButton'
import { Send } from '../icons/Send' 
import './button.css'

const Button = props =>
  <div className="button" onClick={() => 
    props.sendMessage(document.querySelector('input').value) }>
    <Send />
  </div>

const mapDispatchToProps = dispatch => bindActionCreators(
    { sendMessage },
    dispatch
  )

export default connect(null, mapDispatchToProps)(Button)