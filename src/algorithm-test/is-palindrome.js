
import Stack from './Stack.js'

const isPalindrome = function(string) {
  const stack = new Stack()
  const stringArr = Array.from(string)

  stringArr.forEach(char => {
    stack.push(char)
  })

  let word = ''
  while (stack.length() > 0) {
    word = word + stack.pop()
  }

  return word === string
}

export default isPalindrome
