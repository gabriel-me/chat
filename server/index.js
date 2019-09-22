const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const messages = []
let users = []

const addColor = () => {
  const colors = ['#FF0040', '#0040FF', '#00FF80', '#B4B102', '#000000', '#FF00FF']
  const index = Math.round(Math.random() * 6)
  return colors[index]
}

const addUser = newUser => {
  const filter = users.filter(user => user.author === newUser.author)
  if (filter.length === 0) {
    newUser.total = 1
    users.push(newUser)
  } else {
    const userTot = filter[0]
    const newUsers = users.map(user => {
      if (user.author === userTot.author) {
        user.total += 1
      }
      return user
    })
    users = newUsers
  }
}

const getUserColor = author => {
  let color = users.filter(u => u.author == author)
  color = color[0].color
  if (color === undefined) 
    return 'blue'
  return color
}

// socket connection
io.on('connection', socket => {
  socket.broadcast.emit('previousUsers', users)
  socket.emit('previousMessages', messages)
  socket.on('sendMessage', data => {

    addUser({
      author: data.author,
      color: addColor()
    })

    let color = getUserColor(data.author)
    data.color = color
    messages.push(data)
    
    socket.broadcast.emit('previousUsers', users)
    socket.broadcast.emit('previousMessages', messages)
    socket.broadcast.emit('receivedMessage', data)
  })
})

// router
app.use('/', (request, response) => {
  response.json({ data: messages })
})

// server
server.listen(8082)