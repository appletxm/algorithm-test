
function pFn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(666)
    }, 1000)
  })
}

function pFn2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(8888)
    }, 1000)
  })
}

function myAwait(fn) {
  function * gen() {
    let value = yield fn()
    console.info('value:', value)
    return value
  }

  const g = gen()

  function exec(val) {
    const step = g.next(val)

    console.log('**val**', step.done, val, step.value)

    if (step.done) {
      return step.value
    } else {
      if (step.value instanceof Promise) {
        step.value.then(val => {
          exec(val)
        })
      }
    }
  }

  return exec()
}

const res1 = myAwait(pFn)
const res2 = myAwait(pFn2)

console.log('**res1**', res1)
console.log('**res2**', res2)

export default {}

