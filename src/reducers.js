import io from 'socket.io-client'
const socket = io('http://localhost:8082')
const INITIAL_STATE = { texts: '' }

const username = window.localStorage.getItem('username')

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEND':
      socket.emit('sendMessage', { author: username, message: action.payload })
      return state
    case 'CURRENT_MESSAGES':
      return { ...state, texts: action.payload }
    default:
      return state
  }
}