var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;

function max(a, b) {
  return a > b ? a : b;
}

function knapsack(capacity, size, value, n) {
  if (n === 0 || capacity === 0) {
    return 0;
  }

  if (size[n - 1] > capacity) {
    knapsack(capacity, size, value, n - 1);
  } else {
    return max(value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1), knapsack(capacity, size, value, n - 1));
  }
}

function dknapsack(capacity, size, value, n) {
  var k = [];
  for (var i = 0; i <= capacity + 1; i++) {
    k[i] = [];
  }

  for (var _i = 0; _i <= n; _i++) {
    for (var j = 0; j <= capacity; j++) {
      if (_i === 0 || j === 0) {
        k[_i][j] = 0;
      } else if (j >= size[_i - 1]) {
        k[_i][j] = max(value[_i - 1] + k[_i - 1][j - size[_i - 1]], k[_i - 1][j]);
      } else {
        k[_i][j] = k[_i - 1][j];
      }
    }
  }

  return k[n][capacity];
}

function packageFn() {
  var val1 = knapsack(capacity, size, value, n);
  var val2 = dknapsack(capacity, size, value, n);

  return { val1: val1, val2: val2 };
}

export { packageFn };