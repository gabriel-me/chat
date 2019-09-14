import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './containers/signin/Signin'
import Chat from './containers/chat/Chat'

export default () =>
  <BrowserRouter>
    <Switch name='http://localhost:3000'>
      <Route path='/chat' exact component={Chat} />
      <Route path='/' component={Signin} />
    </Switch>
  </BrowserRouter>