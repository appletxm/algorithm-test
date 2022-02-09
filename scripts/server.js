const express = require('express')
const path = require('path')
// const open = require('open')
const app = express()
const serverRouter = require('./server-router')
const { proxyRouter } = require('./proxy-router')

const port = 9000
const host = '127.0.0.1'

app.use('/proxy', proxyRouter)
app.use('*', serverRouter)

app.listen(port, host, function () {
  let url = 'http://' + host + ':' + port
  console.info('dev server started at: ', url)
// setTimeout(function () {
//   let openUrl = url
//   open(openUrl, 'chrome')
// }, 3000)
})
