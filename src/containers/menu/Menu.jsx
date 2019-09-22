import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import io from 'socket.io-client'
import { currentUsers } from './actionUsers'
import Menu from '../../components/menu/Menu'

let justOne = true

const sortUsers = (users) => {
  const topUsers = [...users].sort((a, b) =>
    a.total > b.total ? -1 : a.total < b.total ? 1 : 0)
  const top5Users = topUsers.filter((user, i) => i < 5)
  return top5Users
}

const MenuContainer = props => {
  if (justOne) {
    justOne = false
    const URL_API = 'http://localhost:8082'
    const socket = io(URL_API)
    socket.on('previousUsers', users => {
      props.currentUsers(users)
    })
  }

  const topUsers = sortUsers(props.allUsers.users)
  
  return <Menu users={props.allUsers.users} topUsers={topUsers} />
}

const mapStateToProps = state => 
  ({ allUsers: state.users })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ currentUsers }, dispatch)

export default 
  connect(mapStateToProps, mapDispatchToProps)(MenuContainer)