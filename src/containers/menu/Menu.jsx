import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import io from 'socket.io-client'
import { currentUsers } from './actionUsers'
import Menu from '../../components/menu/Menu'

let justOne = true

const MenuContainer = props => {
  if (justOne) {
    justOne = false
    const URL_API = 'http://localhost:8082'
    const socket = io(URL_API)
    socket.on('previousUsers', users => {
      props.currentUsers(users)
    })
  }
  
  return <Menu users={props.allUsers.users} />
}

const mapStateToProps = state => 
  ({ allUsers: state.users })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ currentUsers }, dispatch)

export default 
  connect(mapStateToProps, mapDispatchToProps)(MenuContainer)