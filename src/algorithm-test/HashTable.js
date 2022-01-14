const HashTable = function() {
  this.table = new Array(137)
}

HashTable.prototype = {
  simpleHash(string) {
    let total = 0
    const data = Array.from(string)
    data.forEach((char, index) => {
      total += string.charCodeAt(index)
    })

    return total % this.table.length
  },

  betterHash(string) {
    let total = 0
    const h = 31
    const data = Array.from(string)
    data.forEach((char, index) => {
      total += h * total + string.charCodeAt(index)
    })

    // total = total % this.table.length

    // if (total < 0) {
    //   total += this.table.length - 1
    // }

    console.info(string, ':', total % this.table.length)

    return parseInt(total % this.table.length)
  },

  put(key, data) {
    const pos = this.betterHash(key)
    // const pos = this.simpleHash(data)
    this.table[pos] = data
    return this
  },

  get(key) {
    const pos = this.betterHash(key)
    return this.table[pos]
  },

  showDistro() {
    this.table.forEach((data, index) => {
      if (data) {
        console.info(index, ':', data)
      }
    })
  }
}

export default HashTable
