import React from 'react'
import './textbox.css'

export default props => 
  <section className={`text-box ${props.type || ''}`}>
    <div style={{
      backgroundColor: props.bgColor || '#F2F2F2',
      color: props.color || '#000000' 
    }}>
      {props.text || ''}
    </div>
  </section>