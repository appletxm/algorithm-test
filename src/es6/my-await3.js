 // 转换目标 async1
// async function async1() {
//    console.log('async1 start');
//    await async2();
//    console.log('async1 end');
// }

function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}

function * myasync1 (params) {
  console.log('async1 start');
  const value = yield requestData(params)
  console.log('async1 end : ', value);
}

function wrapperGen(asyncFn, params) {
  const gen = asyncFn(params)

  function exec(res) {
    const next = gen.next(res)
    Promise.resolve(next.value).then(val => {
      if (!next.done) {
        exec(val)
      }
    })
  }

  exec()

  return Promise.resolve(undefined)
}

wrapperGen(myasync1, {a:1, b:2})

export default {}
