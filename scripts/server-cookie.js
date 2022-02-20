function setCookie(res) {
  res.append('Set-Cookie', 'foo=bar; Path=/html; HttpOnly')
  res.cookie('name', 'tobi', { 
    domain: 'localhost:9000', 
    path: '/', 
    secure: true
  })
  res.cookie('rememberme', '1', { path: '/html', expires: new Date(Date.now() + 900000), httpOnly: true })
  res.header('Set-Cookie', `notShow=123456; Domain=localhost:9000; HttpOnly`)
}

module.exports = setCookie
