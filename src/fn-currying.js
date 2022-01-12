function sum(a, b, c) {
  const realArgs = [...arguments]

  console.log(realArgs, sum.length)

  if (arguments.length >= sum.length) {
    return Array.from(arguments).reduce((a,b) => a + b)
  } else {
    return function(...args) {
      realArgs.push(...args)
      return sum(...realArgs)
    }
  }
}

export default sum
