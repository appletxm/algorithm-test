import _Array$from from 'babel-runtime/core-js/array/from';
var HashTableOpenLink = function HashTableOpenLink() {
  var len = 97;
  this.table = new Array(len);
  for (var i = 0; i < len; i++) {
    this.table[i] = [];
  }
};

HashTableOpenLink.prototype = {
  simpleHash: function simpleHash(string) {
    var total = 0;
    var data = _Array$from(string);
    data.forEach(function (char, index) {
      total += string.charCodeAt(index);
    });
    console.info(string, ':', total % this.table.length);

    return total % this.table.length;
  },
  betterHash: function betterHash(string) {
    var total = 0;
    var h = 31;
    var data = _Array$from(string);
    data.forEach(function (char, index) {
      total += h * total + string.charCodeAt(index);
    });
    console.info(string, ':', total % this.table.length);

    return parseInt(total % this.table.length);
  },
  put: function put(key, data) {
    // const pos = this.betterHash(key)
    var pos = this.simpleHash(data);
    var len = this.table[pos].length;

    this.table[pos][len] = key;
    this.table[pos][len + 1] = data;

    return this;
  },
  get: function get(key) {
    var pos = this.simpleHash(key);
    var len = this.table[pos].length;

    if (len > 2) {
      for (var i = 0; i < len; i = i + 2) {
        if (this.table[pos][i] === key) {
          return this.table[pos][i + 1];
        }
      }
      return undefined;
    } else {
      return this.table[pos][1];
    }
  },
  showDistro: function showDistro() {
    var _this = this;

    this.table.forEach(function (data, index) {
      var len = _this.table[index].length;
      var dataStr = '';

      for (var i = 0; i < len; i = i + 2) {
        var isLast = 2 * Math.floor(i / 2) + 2 === len;
        // console.info(i, len, isLast)
        dataStr += _this.table[index][i] + (isLast ? '' : ',');
      }

      if (len > 0) {
        console.info(index, ':', dataStr);
      }
    });
  }
};

export default HashTableOpenLink;