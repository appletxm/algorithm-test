let express = require('express')
let path = require('path')
let open = require('open')
let app = express()
let serverRouter = require('./server-router')

const port = 9000
const host = '127.0.0.1'

app.use('*', serverRouter)

app.listen(port, host, function () {
  let url = 'http://' + host + ':' + port
  console.info('dev server started at: ', url)
// setTimeout(function () {
//   let openUrl = url
//   open(openUrl, 'chrome')
// }, 3000)
})
