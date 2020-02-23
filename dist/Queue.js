var Queue = function Queue() {
  this.dataSource = [];
  this.pos = 0;
};

Queue.prototype = {
  enqueue: function enqueue(item) {
    this.dataSource.push(item);
  },
  dequeue: function dequeue() {
    this.dataSource.shift();
  },
  front: function front() {
    return this.dataSource[0];
  },
  back: function back() {
    return this.dataSource[this.dataSource.length - 1];
  },
  toString: function toString() {
    return this.dataSource.toString('\n');
  },
  empty: function empty() {
    return this.dataSource.length === 0;
  }
};

export default Queue;