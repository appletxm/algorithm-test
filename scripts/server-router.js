const fs = require('fs')
const path = require('path')
const { cache } = require('./server-cache')
const setCookie = require('./server-cookie')

function getImageFile (req, res) {
  let filename = path.join(__dirname, ('..' + req.baseUrl))
  let fileType = (req.baseUrl).match(/.+\.(.+)/)
  let file = fs.readFileSync(filename)

  res.set('content-type', 'image/' + fileType[1])
  res.send(file)
  res.end()
}

function getHtmlFile (req, res) {
  const url =  req.originalUrl
  // const htmlFileName = url.match(/([^\/]+\.html)$/)
  // let htmlFilePath = path.join(__dirname, `../${htmlFileName && htmlFileName[1] ? htmlFileName[1] : 'index.html'}`)
  const orUrl = req.originalUrl
  let htmlFilePath = path.resolve(`./${orUrl === '/' || !orUrl ? 'index.html' : orUrl}`)
  let html = fs.readFileSync(htmlFilePath)

  res.set('content-type', 'text/html')
  res.send(html)
  res.end()
}

function getScriptFile (req, res) {
  let scriptFilePath = path.join(__dirname, '..' + req.originalUrl)
  let script = fs.readFileSync(scriptFilePath)

  res.set('content-type', 'application/x-javascript')
  res.send(script)
  res.end()
}

function getCssFile (req, res) {
  console.info('====get css file')
}

function assignRouter (req, res, next) {
  console.info('[http get]', req.baseUrl, req.originalUrl)
  
  if (req.originalUrl.indexOf('/api/cache') >= 0) {
    setCookie(res)
    cache(req, res)
  } else if (req.originalUrl.indexOf('assets/images') >= 0) {
    getImageFile(req, res)
  } else if (req.originalUrl.indexOf('.js') >= 0) {
    getScriptFile(req, res)
  } else if (req.originalUrl.indexOf('.css') >= 0) {
    getCssFile(req, res)
  } else if (req.originalUrl.indexOf('.html') >= 0 || req.originalUrl.indexOf('.htm') >= 0) {
    getHtmlFile(req, res)
  } else {
    getHtmlFile(req, res)
  }

  if (next && typeof next === 'function') {
    next()
  }
}

module.exports = assignRouter
