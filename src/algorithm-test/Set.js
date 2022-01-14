const Set = function () {
  this.dataSore = []
}

Set.prototype = {
  add(data) {
    if (this.dataSore.indexOf(data) < 0) {
      // this.dataSore.push(data)
      const current = this.dataSore[this.dataSore.length - 1]
      if (!current || current <= data) {
        this.dataSore.push(data)
      } else {
        this.dataSore.unshift(data)
      }
      return true
    } else {
      return false
    }
  },
  remove(data) {
    const pos = this.dataSore.indexOf(data)
    if (pos >= 0) {
      this.dataSore.splice(pos, 1)
      return false
    } else {
      return true
    }
  },
  size() {
    return this.dataSore.length
  },
  union(set) {
    const tempSet = new Set()
    for (let i = 0; i < this.dataSore.length; i++) {
      tempSet.add(this.dataSore[i])
    }

    for (let i = 0; i < set.dataSore.length; i++) {
      if (!tempSet.contain(set.dataSore[i])) {
        tempSet.dataSore.push(set.dataSore[i])
      }
    }

    return tempSet
  },
  intersect(set) {
    const tempSet = new Set()
    for (let i = 0; i < this.dataSore.length; i++) {
      if (set.contain(this.dataSore[i])) {
        tempSet.add(this.dataSore[i])
      }
    }

    return tempSet
  },
  subset(set) {
    if (this.size() > set.size()) {
      return false
    }

    for (let i = 0; i < this.dataSore.length; i++) {
      if (!set.contain(this.dataSore[i])) {
        return false
      }
    }

    return true
  },
  difference(set) {
    const unionSet = this.union(set)
    const tempSet = new Set()
    for (let i = 0; i < unionSet.dataSore.length; i++) {
      if (!set.contain(unionSet.dataSore[i])) {
        tempSet.add(unionSet.dataSore[i])
      }
    }
    return tempSet
  },
  show() {
    console.info(this.dataSore)
  },
  contain(data) {
    if (this.dataSore.indexOf(data) > -1) {
      return true
    } else {
      return false
    }
  },

  higher(data) {
    let min = null
    for (let i = 0; i < this.dataSore.length; i++) {
      if (this.dataSore[i] > data) {
        min = min === null ? this.dataSore[i] : (this.dataSore[i] < min ? this.dataSore[i] : min)
      }
    }

    return min
  },

  lower(data) {
    let max = null
    for (let i = 0; i < this.dataSore.length; i++) {
      if (this.dataSore[i] < data) {
        max = max === null ? this.dataSore[i] : (this.dataSore[i] < max ? max : this.dataSore[i])
      }
    }

    return max
  }
}

export default Set
