import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Routes from './Routes'
import Reducers from './reducers'
import validation from './utils/validation'

validation()

const reducers = combineReducers({
  messages: Reducers
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>, 
  document.getElementById('root')
)