const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const messages = []
const users = []

const addUser = newUser => {
  if (!users.includes(newUser))
    users.push(newUser)
}

// socket connection
io.on('connection', socket => {
  socket.broadcast.emit('previousUsers', users)
  socket.emit('previousMessages', messages)
  socket.on('sendMessage', data => {
    addUser(data.author)
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