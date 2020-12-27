import _JSON$stringify from 'babel-runtime/core-js/json/stringify';
function dikae(b) {
  var arr = b.reduce(function (x, y) {
    var matched = [];
    x.forEach(function (item) {
      y.forEach(function (item2) {
        if (item.constructor && item.constructor.name.toLowerCase() === 'array') {
          item.push(item2);
        } else {
          matched.push([item, item2]);
        }
      });
    });
    return matched;
  });

  console.info('******', _JSON$stringify(arr));
}

export default dikae;