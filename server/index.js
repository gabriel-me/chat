const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const messages = []

// socket connection
io.on('connection', socket => {
  socket.emit('previousMessages', messages)
  socket.on('sendMessage', data => {
    messages.push(data)
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