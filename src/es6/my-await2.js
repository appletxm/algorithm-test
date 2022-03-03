function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}

// async function foo() {
//   const res1 = await requestData('aaa')
//   const res2 = await requestData(res1 + 'bbb')
//   const res3 = await requestData(res2 + 'ccc')
//   console.log(res3)
// }

// foo()

function* generatorFoo() {
	const res1 = yield requestData('aaa')
  const res2 = yield requestData(res1 + 'bbb')
  const res3 = yield requestData(res2 + 'ccc')
  console.log(res3)
  return res3
}

function execGen(genFn) {
  const gen = genFn()

  function exec(res) {
    const next = gen.next(res)
    // Promise.resolve(next.value).then(val => {
    //   if (!next.done) {
    //     exec(val)
    //   }
    // })
    if (next.done) {
      return next.value
    } else {
      next.value.then(value => {
        console.log('===value', value)
        exec(value)
      }).catch(err => {
        gen.throw(err)
      })
    }
  }

  exec()
}

const value = execGen(generatorFoo)
console.log('**total value**', value)

export default {}
