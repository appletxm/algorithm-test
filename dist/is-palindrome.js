import _Array$from from 'babel-runtime/core-js/array/from';

import Stack from './Stack.js';

var isPalindrome = function isPalindrome(string) {
  var stack = new Stack();
  var stringArr = _Array$from(string);

  stringArr.forEach(function (char) {
    stack.push(char);
  });

  var word = '';
  while (stack.length() > 0) {
    word = word + stack.pop();
  }

  return word === string;
};

export default isPalindrome;