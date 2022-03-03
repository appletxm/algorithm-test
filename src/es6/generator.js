function * gen() {
  yield 1;
  yield 2;
  yield 3;
}

function * fiboSequence() {
  let x = 0;
  let y = 1;

  for(;;) {
    yield y
    // [x, y] = [y, x + y]
    const temp = x
    x = y
    y = temp + y
  }
}

function fibo(n) {
  for(let num of fiboSequence()) {
    if (n-- <= 0) {
      return num
    }
  }
}

function fibon(n) {
  let x = 0
  let y = 0

  for (let i = 1; i <= n; i++) {
    if (y === 0) {
      y = 1
    } else {
      const temp = x
      x = y
      y = temp + y
    }
  
    // console.log('===', x, y)
  }

  return y
}


function testFn(...args) {
  console.log('==args==', args)
  return 1
}

function * smallNumbers(...args) {
  console.log('next() invoked the first time; argument discarded', args)
  let y1 = yield testFn()
  console.log('next() invoke second time with argument', y1)
  let y2 = yield 2
  console.log('next() invoke third time with argument', y2)
  let y3 = yield 3
  console.log('next() invoke fourth time with argument', y3)
  return 4
}

export default { gen, fibo, fibon, smallNumbers }
