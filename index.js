require('babel-polyfill')

const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development'
let Server = require('./dist').default

if (ENV !== 'production') {
  require('babel-register')
  Server = require('./src').default

} else {
  Server = require('./dist').default
}

const start = async () => {
  const server = await Server()
  await server.start()
  console.log('Server started at: ' + server.info.uri)
}

start()
  .catch(console.err)
