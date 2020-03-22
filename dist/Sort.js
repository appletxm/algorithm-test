export { _quickSort as quickSort };
function _quickSort(list) {
  if (list.length === 0) {
    return [];
  }

  var left = [];
  var right = [];
  var pivot = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }

  // left.push(pivot)
  // const newArr = left.concat(right)
  // console.info(left, pivot, right)
  // quickSort(left, pivot, right)

  return _quickSort(left).concat(pivot, _quickSort(right));
}

export function qSort(arr) {
  if (arr.length === 0) {
    return [];
  }

  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    console.info('basic value: ' + pivot + ' current value: ' + arr[i]);
    if (arr[i] < pivot) {
      console.info('move ' + arr[i] + ' to left');
      left.push(arr[i]);
    } else {
      console.info('move ' + arr[i] + ' to right');
      right.push(arr[i]);
    }
  }

  return qSort(left).concat(pivot, qSort(right));
}

function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;

  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = 0;
  }
}

CArray.prototype = {
  insert: function insert(element) {
    this.dataStore[this.pos++] = element;
  },
  toString: function toString() {
    var str = [];
    this.dataStore.forEach(function (data, index) {
      str.push(data + ' ');
      if (index > 0 && index % 10 === 0) {
        str.push('\n');
      }
    });

    return str.join('');
  },
  setData: function setData() {
    for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
  },
  clear: function clear() {
    for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = 0;
    }
  },
  swap: function swap(arr, index1, index2) {
    var tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  },
  bubbleSort: function bubbleSort(dataStore) {
    var numElements = dataStore.length;
    for (var outer = numElements; outer >= 2; --outer) {
      for (var inner = 0; inner <= outer - 1; ++inner) {
        if (dataStore[inner] < dataStore[inner - 1]) {
          this.swap(dataStore, inner, inner - 1);
        }
      }
    }

    return dataStore;
  },
  selectSort: function selectSort(dataStore) {
    var numElements = dataStore.length;

    for (var i = 0; i < numElements; i++) {
      for (var j = i + 1; j < numElements; j++) {
        if (dataStore[i] > dataStore[j]) {
          this.swap(dataStore, i, j);
        }
      }
    }

    return dataStore;
  },
  insertSort: function insertSort() {
    var temp = void 0,
        inner = void 0;
    for (var outer = 1; outer < this.dataStore.length; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && this.dataStore[inner - 1] >= temp) {
        this.dataStore[inner] = this.dataStore[inner - 1];
      }
      this.dataStore[inner] = temp;
    }
  },
  quickSort: function quickSort() {
    return _quickSort(this.dataStore);
  }
};

export default CArray;