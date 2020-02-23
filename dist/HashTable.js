import _Array$from from 'babel-runtime/core-js/array/from';
var HashTable = function HashTable() {
  this.table = new Array(137);
};

HashTable.prototype = {
  simpleHash: function simpleHash(string) {
    var total = 0;
    var data = _Array$from(string);
    data.forEach(function (char, index) {
      total += string.charCodeAt(index);
    });

    return total % this.table.length;
  },
  betterHash: function betterHash(string) {
    var total = 0;
    var h = 31;
    var data = _Array$from(string);
    data.forEach(function (char, index) {
      total += h * total + string.charCodeAt(index);
    });

    // total = total % this.table.length

    // if (total < 0) {
    //   total += this.table.length - 1
    // }

    console.info(string, ':', total % this.table.length);

    return parseInt(total % this.table.length);
  },
  put: function put(key, data) {
    var pos = this.betterHash(key);
    // const pos = this.simpleHash(data)
    this.table[pos] = data;
    return this;
  },
  get: function get(key) {
    var pos = this.betterHash(key);
    return this.table[pos];
  },
  showDistro: function showDistro() {
    this.table.forEach(function (data, index) {
      if (data) {
        console.info(index, ':', data);
      }
    });
  }
};

export default HashTable;