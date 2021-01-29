


import router from './routers/router'
import Server from './server/server'

const server = Server.init(3001)
server.app.use( router )

server.start(() => {
  console.log(` Server ruuning at ${ 3001 } `)
} )

