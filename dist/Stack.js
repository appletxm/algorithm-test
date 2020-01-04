var Stack = function Stack() {
  this.dataStore = [];
  this.top = 0;
};

Stack.prototype = {
  push: function push(item) {
    this.dataStore[this.top++] = item;
  },
  peek: function peek() {
    return this.dataStore(this.top - 1);
  },
  pop: function pop() {
    return this.dataStore[--this.top];
  },
  clear: function clear() {
    this.top = 0;
  },
  length: function length() {
    return this.top;
  }
};

export default Stack;