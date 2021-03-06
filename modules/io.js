import http from 'http'
import socketIO from 'socket.io'

export default function () {
  this.nuxt.hook('render:before', (renderer) => {
    const server = http.createServer(this.nuxt.renderer.app)
    const io = socketIO(server)

    // overwrite nuxt.server.listen()
    this.nuxt.server.listen = (port, host) => {
      port = port || process.env.PORT || 3000
      host = host || process.env.HOST || '0.0.0.0'
      return new Promise((resolve) => server.listen(port, host, resolve))
    }
    // close this server on 'close' event
    this.nuxt.hook('close', () => new Promise(server.close))

    // Add socket.io events
    const boards = {}
    io.on('connection', (socket) => {
      socket.on('get-update-board', function (fn) {
        fn(boards[0])
      })
      socket.on('update-board', function (message) {
        boards[0] = message
        socket.broadcast.emit('get-update-board', message)
      })
    })
  })
}
