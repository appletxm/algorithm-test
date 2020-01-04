import Stack from './Stack.js'

const base16 = {
  '10': 'A',
  '11': 'B',
  '12': 'C',
  '13': 'D',
  '14': 'E',
  '15': 'F'
}

const baseChange = function(num, base) {
  const stack = new Stack()
  let str = ''

  while (num !== 0) {
    const mode = num % base
    stack.push(base === 16 && mode > 10 ? base16[mode] : mode)
    num = Math.floor(num / base)
  }

  while (stack.length() > 0) {
    str = str + stack.pop()
  }

  return str
}

const convertTo10 = function(str, fromBase, toBase) {
  var arr = Array.from(str)
  var num = 0

  for (var i = 0; i < arr.length; i++) {
    num = parseInt(arr[i], fromBase) + fromBase * num
  }

  return num
}

export { convertTo10, baseChange }
export default baseChange
