import _Object$keys from 'babel-runtime/core-js/object/keys';

var Dictionary = function Dictionary() {
  this.dataSource = [];
};

Dictionary.prototype = {
  add: function add(key, value) {
    this.dataSource[key] = value;
    return this;
  },
  find: function find(key) {
    return this.dataSource[key];
  },
  remove: function remove(key) {
    delete this.dataSource[key];
    return this;
  },
  showAll: function showAll() {
    var _this = this;

    var keys = _Object$keys(this.dataSource).sort();
    keys.forEach(function (key) {
      console.info(key, '->', _this.dataSource[key]);
    });
  },
  count: function count() {
    return _Object$keys(this.dataSource).length;
  },
  clear: function clear() {
    var _this2 = this;

    var keys = _Object$keys(this.dataSource);
    keys.forEach(function (key) {
      delete _this2.dataSource[key];
    });
  }
};

export default Dictionary;