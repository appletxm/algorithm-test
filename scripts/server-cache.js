function forCache(req, res) {
  /* Pragma/Cache-Control/Expires */
  // http 1.0
  // res.setHeader('Pragma', 'no-cache')

  // // http 1.0/1.1
  // const date = new Date()
  // const expireTime = new Date(date.getTime() + (1000 * 20))
  // // console.info('expire time:', expireTime.toGMTString())
  // res.setHeader('Expires', expireTime.toGMTString())

  // http 1.1
  // res.setHeader('Cache-Control', 'no-store') // no-cache, no-store, max-age=10
  // res.header('Cache-Control', 'no-cache') // no-cache, no-store, max-age=10
  // res.header('Cache-Control', 'max-age=10') // no-cache, no-store, max-age=10

  /* ETag/If-None-Match Last-Modified/If-Modified-Since */
  // res.header('ETag', '1234567') // Etag hash 算法

  // const date = new Date()
  // const expireTime = new Date(date.getTime() + (1000 * 20))
  // res.setHeader('Last-Modified', expireTime.toGMTString())

  res.status(200)
  res.json({
    a: 1,
    b: 2
  })
}

function cache(req, res) {
  forCache(req, res)
}

module.exports = {
  cache
}
