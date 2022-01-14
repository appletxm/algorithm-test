const Stack = function () {
  this.dataStore = []
  this.top = 0
}

Stack.prototype = {
  push (item) {
    this.dataStore[this.top++] = item
  },

  peek() {
    return this.dataStore(this.top - 1)
  },

  pop() {
    return this.dataStore[--this.top]
  },

  clear() {
    this.top = 0
  },

  length() {
    return this.top
  }
}

export default Stack
