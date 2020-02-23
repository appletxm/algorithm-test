
const Dictionary = function () {
  this.dataSource = []
}

Dictionary.prototype = {
  add(key, value) {
    this.dataSource[key] = value
    return this
  },

  find(key) {
    return this.dataSource[key]
  },

  remove(key) {
    delete this.dataSource[key]
    return this
  },

  showAll() {
    const keys = Object.keys(this.dataSource).sort()
    keys.forEach(key => {
      console.info(key, '->', this.dataSource[key])
    })
  },

  count() {
    return Object.keys(this.dataSource).length
  },

  clear() {
    const keys = Object.keys(this.dataSource)
    keys.forEach(key => {
      delete this.dataSource[key]
    })
  }
}

export default Dictionary
