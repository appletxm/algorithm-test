function seqSearch(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data && i > (arr.length * 0.2)) {
      const temp = arr[0]
      arr[0] = arr[i]
      arr[i] = temp
      return true
    }
  }

  return false
}

function countTimes(arr, data) {
  let count = 0
  let pos = binSearch(arr, data)
  // debugger
  if (pos >= 0) {
    count++
    for (let i = pos - 1; i >= 0; i--) {
      if (arr[i] === data) {
        count++
      } else {
        break
      }
    }

    for (let i = pos + 1; i < arr.length; i++) {
      if (arr[i] === data) {
        count++
      } else {
        break
      }
    }
  }

  return count
}
function binSearch(arr, data) {
  let upperBound = arr.length - 1
  let lowerBound = 0

  while (lowerBound <= upperBound) {
    const mid = Math.floor((upperBound + lowerBound) / 2)
    if (data > arr[mid]) {
      lowerBound = mid + 1
    } else if (data < arr[mid]) {
      upperBound = mid - 1
    } else {
      return mid
    }
  }

  return -1
}

export { seqSearch, binSearch, countTimes }
