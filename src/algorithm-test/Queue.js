const Queue = function () {
  this.dataSource = []
  this.pos = 0
}

Queue.prototype = {
  enqueue(item) {
    this.dataSource.push(item)
  },

  dequeue() {
    this.dataSource.shift()
  },

  front() {
    return this.dataSource[0]
  },

  back() {
    return this.dataSource[this.dataSource.length - 1]
  },

  toString() {
    return this.dataSource.toString('\n')
  },

  empty() {
    return this.dataSource.length === 0
  }

}

export default Queue
