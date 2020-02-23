var Set = function Set() {
  this.dataSore = [];
};

Set.prototype = {
  add: function add(data) {
    if (this.dataSore.indexOf(data) < 0) {
      // this.dataSore.push(data)
      var current = this.dataSore[this.dataSore.length - 1];
      if (!current || current <= data) {
        this.dataSore.push(data);
      } else {
        this.dataSore.unshift(data);
      }
      return true;
    } else {
      return false;
    }
  },
  remove: function remove(data) {
    var pos = this.dataSore.indexOf(data);
    if (pos >= 0) {
      this.dataSore.splice(pos, 1);
      return false;
    } else {
      return true;
    }
  },
  size: function size() {
    return this.dataSore.length;
  },
  union: function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataSore.length; i++) {
      tempSet.add(this.dataSore[i]);
    }

    for (var _i = 0; _i < set.dataSore.length; _i++) {
      if (!tempSet.contain(set.dataSore[_i])) {
        tempSet.dataSore.push(set.dataSore[_i]);
      }
    }

    return tempSet;
  },
  intersect: function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataSore.length; i++) {
      if (set.contain(this.dataSore[i])) {
        tempSet.add(this.dataSore[i]);
      }
    }

    return tempSet;
  },
  subset: function subset(set) {
    if (this.size() > set.size()) {
      return false;
    }

    for (var i = 0; i < this.dataSore.length; i++) {
      if (!set.contain(this.dataSore[i])) {
        return false;
      }
    }

    return true;
  },
  difference: function difference(set) {
    var unionSet = this.union(set);
    var tempSet = new Set();
    for (var i = 0; i < unionSet.dataSore.length; i++) {
      if (!set.contain(unionSet.dataSore[i])) {
        tempSet.add(unionSet.dataSore[i]);
      }
    }
    return tempSet;
  },
  show: function show() {
    console.info(this.dataSore);
  },
  contain: function contain(data) {
    if (this.dataSore.indexOf(data) > -1) {
      return true;
    } else {
      return false;
    }
  },
  higher: function higher(data) {
    var min = null;
    for (var i = 0; i < this.dataSore.length; i++) {
      if (this.dataSore[i] > data) {
        min = min === null ? this.dataSore[i] : this.dataSore[i] < min ? this.dataSore[i] : min;
      }
    }

    return min;
  },
  lower: function lower(data) {
    var max = null;
    for (var i = 0; i < this.dataSore.length; i++) {
      if (this.dataSore[i] < data) {
        max = max === null ? this.dataSore[i] : this.dataSore[i] < max ? max : this.dataSore[i];
      }
    }

    return max;
  }
};

export default Set;