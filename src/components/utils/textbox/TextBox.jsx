import React from 'react'
import './textbox.css'

export default props => 
  <section className={`text-box ${props.type || ''}`}>
    <div style={{
      backgroundColor: props.bgColor || '#FAFAFA',
      color: props.color || '#000000' 
    }}>
      {props.type !== 'sender' ? <h1>@{props.author || ''}</h1> : ''}
      {props.text || ''}
    </div>
  </section>