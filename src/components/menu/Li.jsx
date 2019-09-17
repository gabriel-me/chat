import React from 'react'
import './li.css'

export default props => 
  <li className="li">
    <div style={{backgroundColor: props.backgroundColor || '#013ADF'}}>
      {props.text ? ((props.text).substring(0, 1)).toUpperCase() : '?'}
    </div>
    <p style={{color: props.color || '#013ADF'}}>
      {props.text}
    </p>
  </li>