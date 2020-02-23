const HashTableOpenLink = function() {
  const len = 97
  this.table = new Array(len)
  for (let i = 0; i < len; i++) {
    this.table[i] = []
  }
}

HashTableOpenLink.prototype = {
  simpleHash(string) {
    let total = 0
    const data = Array.from(string)
    data.forEach((char, index) => {
      total += string.charCodeAt(index)
    })
    console.info(string, ':', total % this.table.length)

    return total % this.table.length
  },

  betterHash(string) {
    let total = 0
    const h = 31
    const data = Array.from(string)
    data.forEach((char, index) => {
      total += h * total + string.charCodeAt(index)
    })
    console.info(string, ':', total % this.table.length)

    return parseInt(total % this.table.length)
  },

  put(key, data) {
    // const pos = this.betterHash(key)
    const pos = this.simpleHash(data)
    let len = this.table[pos].length

    this.table[pos][len] = key
    this.table[pos][len + 1] = data

    return this
  },

  get(key) {
    const pos = this.simpleHash(key)
    let len = this.table[pos].length

    if (len > 2) {
      for (let i = 0; i < len; i = i + 2) {
        if (this.table[pos][i] === key) {
          return this.table[pos][i + 1]
        }
      }
      return undefined
    } else {
      return this.table[pos][1]
    }
  },

  showDistro() {
    this.table.forEach((data, index) => {
      let len = this.table[index].length
      let dataStr = ''

      for (let i = 0; i < len; i = i + 2) {
        const isLast = 2 * Math.floor(i / 2) + 2 === len
        // console.info(i, len, isLast)
        dataStr += (this.table[index][i] + (isLast ? '' : ','))
      }

      if (len > 0) {
        console.info(index, ':', dataStr)
      }
    })
  }
}

export default HashTableOpenLink
