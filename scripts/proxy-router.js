const https = require('https')
const path = require('path')
const fs = require('fs')

function proxyAgent(req, res) {
  let len = 0
  const options = {
    hostname: 'sch.apiairasia.com',
    port: 443,
    path: 'station/v2/zh-cn/file.json',
    method: 'GET'
  }
  
  // const agent = new https.Agent(options)

  const reqProxy = https.request(options, (resProxy) => {
    console.log('statusCode:', resProxy.statusCode);
    console.log('headers:', resProxy.headers);

    // resProxy.on('data', (d) => {
    //   process.stdout.write(d)
    //   body = body + d
    // })

    // resProxy.on('end', () => {
    //   console.log('body:', body)
    //   res.send(body)
    // })

    resProxy.pipe(res)
  });

  reqProxy.on('error', (e) => {
    console.error(e)
  })
  reqProxy.end()
}

function proxyRouter(req, res) {
  // const { query: url } = req
  // createProxyMiddleware({ target: 'https://sch.apiairasia.com/station/v2/zh-cn/file.json', changeOrigin: true })(req, res)

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1 // 1: not verify    0: verify

  // let body = []
  // const stream = fs.createWriteStream(path.resolve('./temp/test.txt'))

  https.get('https://sch.apiairasia.com/station/v2/zh-cn/file.json', (proxyRes) => {
    console.log('statusCode:', proxyRes.statusCode)
    console.log('headers:', proxyRes.headers)
    console.log('content-length:', proxyRes['headers']['content-length'])

    // proxyRes.on('data', (d) => {
    //   console.log('Buffer.isEncoding:', Buffer.isEncoding('utf8'))
    //   body.push(d)
    //   // fs.appendFile(path.resolve('./temp/test.josn'), Buffer.from(d, 'utf8'), function (err) {
    //   //   if (err) {
    //   //     console.log('[append err]:', err)
    //   //   } else {
    //   //     len = len + d.length
    //   //     console.log('[append file]:', len)
    //   //   }
    //   // })
    // });

    // proxyRes.setEncoding('utf8')
    // proxyRes.pipe(stream)

    // proxyRes.on('end', () => {
    //   console.log('proxy end!!!')
    //   // const buffer = Buffer.concat(body)
    //   // console.log('buffer to string:', buffer.toString('ascii'))
    //   // fs.writeFileSync(path.resolve('./temp/test.josn'), buffer)
    //   // body = []

    //   res.json({
    //     code: 200,
    //     data: {
    //       a: 1,
    //       b: 2
    //     }
    //   })
    // })

    proxyRes.pipe(res)
  }).on('error', (e) => {
    console.error(e)
  })
}

module.exports = { proxyRouter, proxyAgent }
