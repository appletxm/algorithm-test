function bubble(data) {
  const len = data.length

  if (len <= 1) {
    return data
  }

  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - i; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = temp
      }
    }
  }

  return data
}

function quick(data) {
  const len = data.length

  if (len <= 1) {
    return data
  }

  // const pivotIndex = Math.floor(len / 2)
  // const pivot = data.splice(pivotIndex, 1)[0]
  // const left = []
  // const right = []
  // const len2 = data.length

  // for(let i = 0; i < len2; i++) {
  //   if (data[i] < pivot) {
  //     left.push(data[i])
  //   } else {
  //     right.push(data[i])
  //   }
  // }

  // return quick(left).concat([pivot], quick(right))

  const pivotIndex = 0
  const pivot = data[pivotIndex]
  const left = []
  const right = []

  for(let i = 1; i < len; i++) {
    if (data[i] < pivot) {
      left.push(data[i])
    } else {
      right.push(data[i])
    }
  }

  return quick(left).concat([pivot], quick(right))
}

function select(data) {
  const len = data.length

  if (len <= 1) {
    return data
  }

  let minIndex = 0

  for(let i = 0; i < len; i++) {
    minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j
      }
    }

    const temp = data[i]
    data[i] = data[minIndex]
    data[minIndex] = temp
  }
}

export default {
  bubble,
  quick,
  select
}
