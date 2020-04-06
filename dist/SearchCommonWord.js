import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
var SearchCommonWord = function () {
  function SearchCommonWord() {
    _classCallCheck(this, SearchCommonWord);

    this.firstStr = '';
    this.secondStr = '';
  }

  _createClass(SearchCommonWord, [{
    key: 'initArray',
    value: function initArray(str1, str2) {
      var lcsarr = new Array(str1.length + 1);
      for (var i = 0; i < str1.length; i++) {
        lcsarr[i] = new Array(str2.length + 1);
        for (var j = 0; j < str2.length; j++) {
          lcsarr[i][j] = 0;
        }
      }

      return lcsarr;
    }
  }, {
    key: 'goGetCommonStr',
    value: function goGetCommonStr(str1, str2) {
      this.firstStr = str1;
      this.secondStr = str2;

      var max = 0;
      var index = 0;
      var lcsarr = this.initArray(str1, str2);

      for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
          if (i === 0 || j === 0) {
            lcsarr[i][j] = 0;
          } else {
            if (str1[i - 1] === str2[j - 1]) {
              lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
            } else {
              lcsarr[i][j] = 0;
            }
          }

          if (max < lcsarr[i][j]) {
            max = lcsarr[i][j];
            index = i;
          }
        }
      }

      var str = '';
      if (max > 0) {
        for (var _i = index - max; _i <= max; _i++) {
          str += str2[_i];
        }
      }

      return str;
    }
  }, {
    key: 'goGetCommonStrMy',
    value: function goGetCommonStrMy(str1, str2) {
      var max = 0;
      var pos = null;
      var countArr = this.initArray(str1, str2);

      for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
          if (str1[i] !== str2[j]) {
            countArr[i][j] = 0;
          } else {
            countArr[i][j] = i > 0 && j > 0 ? countArr[i - 1][j - 1] + 1 : 1;
          }

          if (countArr[i][j] > max) {
            max = countArr[i][j];
            pos = j;
          }
        }
      }

      // console.info(max, pos)

      var str = '';
      if (max <= 0) {
        return str;
      } else {
        var maxIndex = pos;
        var minIndex = pos - max + 1;
        // console.info(`${minIndex} - ${maxIndex} `)
        for (var k = minIndex; k <= maxIndex; k++) {
          str += str2[k];
        }
        return str;
      }
    }
  }]);

  return SearchCommonWord;
}();
export default SearchCommonWord;