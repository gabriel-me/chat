import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Chat from './components/chat/Chat'
import bodyReducer from './containers/body/bodyReducer'

const reducers = combineReducers({
  messages: bodyReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Chat />
  </Provider>, 
  document.getElementById('root')
)