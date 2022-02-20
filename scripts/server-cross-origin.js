function addCrossOrigin(res) {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST') 
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
  // res.setHeader("Content-Type", "application/json;charset=utf-8");
}

module.exports = addCrossOrigin
