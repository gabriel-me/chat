import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Chat from './containers/chat/Chat'
import Reducers from './reducers'
import generateID from './utils/generateID'

window.localStorage.setItem('id', generateID())

const reducers = combineReducers({
  messages: Reducers
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Chat />
  </Provider>, 
  document.getElementById('root')
)