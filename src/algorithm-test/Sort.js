export function quickSort(list) {
  if (list.length === 0) {
    return []
  }

  const left = []
  const right = []
  const pivot = list[0]
  for (let i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }

  // left.push(pivot)
  // const newArr = left.concat(right)
  // console.info(left, pivot, right)
  // quickSort(left, pivot, right)

  return quickSort(left).concat(pivot, quickSort(right))
}

export function qSort(arr) {
  if (arr.length === 0) {
    return []
  }

  const left = []
  const right = []
  const pivot = arr[0]
  for (let i = 1; i < arr.length; i++) {
    console.info(`basic value: ${pivot} current value: ${arr[i]}`)
    if (arr[i] < pivot) {
      console.info(`move ${arr[i]} to left`)
      left.push(arr[i])
    } else {
      console.info(`move ${arr[i]} to right`)
      right.push(arr[i])
    }
  }

  return qSort(left).concat(pivot, qSort(right))
}

function CArray (numElements) {
  this.dataStore = []
  this.pos = 0
  this.numElements = numElements

  for (let i = 0; i < numElements; ++i) {
    this.dataStore[i] = 0
  }
}

CArray.prototype = {
  insert(element) {
    this.dataStore[this.pos++] = element
  },

  toString() {
    let str = []
    this.dataStore.forEach((data, index) => {
      str.push(data + ' ')
      if (index > 0 && index % 10 === 0) {
        str.push('\n')
      }
    })

    return str.join('')
  },

  setData() {
    for (let i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
  },

  clear() {
    for (let i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = 0
    }
  },

  swap(arr, index1, index2) {
    const tmp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tmp
  },

  bubbleSort(dataStore) {
    const numElements = dataStore.length
    for (let outer = numElements; outer >= 2; --outer) {
      for (let inner = 0; inner <= outer - 1; ++inner) {
        if (dataStore[inner] < dataStore[inner - 1]) {
          this.swap(dataStore, inner, inner - 1)
        }
      }
    }

    return dataStore
  },

  selectSort(dataStore) {
    const numElements = dataStore.length

    for (let i = 0; i < numElements; i++) {
      for (let j = i + 1; j < numElements; j++) {
        if (dataStore[i] > dataStore[j]) {
          this.swap(dataStore, i, j)
        }
      }
    }

    return dataStore
  },

  insertSort() {
    let temp, inner
    for (let outer = 1; outer < this.dataStore.length; ++outer) {
      temp = this.dataStore[outer]
      inner = outer
      while (inner > 0 && this.dataStore[inner - 1] >= temp) {
        this.dataStore[inner] = this.dataStore[inner - 1]
      }
      this.dataStore[inner] = temp
    }
  },

  quickSort() {
    return quickSort(this.dataStore)
  }
}

export default CArray
