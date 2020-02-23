import Stack from './Stack.js';

var factorial = function factorial(num) {
  var stack = new Stack();
  var total = 1;

  if (num === 0) {
    return 1;
  }

  while (num > 0) {
    stack.push(num);
    num--;
  }

  while (stack.length() > 0) {
    total = total * parseInt(stack.pop(), 10);
  }

  return total;
};

var factorial2 = function factorial2(num, total) {
  if (num === 0) {
    return total || 1;
  }

  return factorial2(num - 1, (total || 1) * num);
};

export { factorial2, factorial };
export default factorial;