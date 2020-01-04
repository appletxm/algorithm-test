import _Array$from from 'babel-runtime/core-js/array/from';
import Stack from './Stack.js';

var base16 = {
  '10': 'A',
  '11': 'B',
  '12': 'C',
  '13': 'D',
  '14': 'E',
  '15': 'F'
};

var baseChange = function baseChange(num, base) {
  var stack = new Stack();
  var str = '';

  while (num !== 0) {
    var mode = num % base;
    stack.push(base === 16 && mode > 10 ? base16[mode] : mode);
    num = Math.floor(num / base);
  }

  while (stack.length() > 0) {
    str = str + stack.pop();
  }

  return str;
};

var convertTo10 = function convertTo10(str, fromBase, toBase) {
  var arr = _Array$from(str);
  var num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = parseInt(arr[i], fromBase) + fromBase * num;
  }

  return num;
};

export { convertTo10, baseChange };
export default baseChange;