import Stack from './Stack.js'

const factorial = function (num) {
  const stack = new Stack()
  let total = 1

  if (num === 0) {
    return 1
  }

  while (num > 0) {
    stack.push(num)
    num--
  }

  while (stack.length() > 0) {
    total = total * parseInt(stack.pop(), 10)
  }

  return total
}

const factorial2 = function(num, total) {
  if (num === 0) {
    return total || 1
  }

  return factorial2(num - 1, (total || 1) * num)
}

export { factorial2, factorial }
export default factorial
