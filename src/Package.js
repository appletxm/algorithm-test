let value = [4, 5, 10, 11, 13]
let size = [3, 4, 7, 8, 9]
let capacity = 16
let n = 5

function max(a, b) {
  return  (a > b) ? a : b
}

function knapsack(capacity, size, value, n) {
  if (n === 0 || capacity === 0) {
    return 0
  }

  if (size[n - 1] > capacity) {
    knapsack(capacity, size, value, n - 1)
  } else {
    return max(value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1), knapsack(capacity, size, value, n - 1))
  }
}

function dknapsack(capacity, size, value, n) {
  let k = []
  for (let i = 0; i <= capacity + 1; i++) {
    k[i] = []
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (i === 0 || j === 0) {
        k[i][j] = 0
      } else if (j >= size[i - 1]) {
        k[i][j] = max(value[i - 1] + k[i - 1][j - size[i - 1]], k[i - 1][j])
      } else {
        k[i][j] = k[i - 1][j]
      }
    }
  }

  return k[n][capacity]
}

function packageFn() {
  const val1 = knapsack(capacity, size, value, n)
  const val2 = dknapsack(capacity, size, value, n)

  return {val1, val2}
}

export { packageFn }
