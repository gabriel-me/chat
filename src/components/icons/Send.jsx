import React from 'react'

export const Send = props => {
  const IconStyle = { fill: props.color || "#000000" }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path style={IconStyle} d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}