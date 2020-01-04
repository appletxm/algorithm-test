var List = function List(list) {
  this.list = list;
};

List.prototype.insertBiggerThen = function (fact) {
  var count = 0;
  this.list.forEach(function (item) {
    if (typeof item === 'string' && typeof fact === 'string') {
      count = fact > item ? count + 1 : count;
    } else if (typeof item === 'string' && typeof fact === 'number') {
      count = fact.toString() > item ? count + 1 : count;
    } else if (typeof item === 'number' && typeof fact === 'number') {
      count = fact - item >= 0 ? count + 1 : count;
    } else if (typeof item === 'number' && typeof fact === 'string') {
      count = fact > item.toString() ? count + 1 : count;
    }
  });

  if (count === this.list.length) {
    this.list.push(fact);
    console.info('more than insert success', fact, this.list);
  } else {
    console.warn('more than insert fail', fact, this.list);
  }
};

List.prototype.insertLessThen = function (fact) {
  var count = 0;

  this.list.forEach(function (item) {
    if (typeof item === 'string' && typeof fact === 'string') {
      count = item > fact ? count + 1 : count;
    } else if (typeof item === 'string' && typeof fact === 'number') {
      count = item > fact.toString() ? count + 1 : count;
    } else if (typeof item === 'number' && typeof fact === 'number') {
      count = item - fact >= 0 ? count + 1 : count;
    } else if (typeof item === 'number' && typeof fact === 'string') {
      count = item.toString() > fact.toString() ? count + 1 : count;
    }
  });

  if (count === this.list.length) {
    this.list.push(fact);
    console.info('less than insert success', fact, this.list);
  } else {
    console.warn('less than insert fail', fact, this.list);
  }
};

export default List;