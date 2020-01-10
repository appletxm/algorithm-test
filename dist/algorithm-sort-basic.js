import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

var SortBasic = function () {
  function SortBasic() {
    _classCallCheck(this, SortBasic);

    this.numbers = [];
    this.queue = [];
  }

  _createClass(SortBasic, [{
    key: '_createQueue',
    value: function _createQueue() {
      for (var i = 0; i < 10; i++) {
        this.queue[i] = [];
      }
    }
  }, {
    key: 'getSortArr',
    value: function getSortArr() {
      var numberArr = [];
      this.queue.forEach(function (item) {
        numberArr = numberArr.concat(item);
      });
      this.numbers = numberArr;
    }
  }, {
    key: 'doSort',
    value: function doSort(numbers) {
      this.numbers = numbers;
      console.info('start this.number:', this.numbers);

      this._createQueue();
      this.unitSort();
      // console.info('this.queue:', this.queue)

      this.getSortArr();
      console.info('secondary this.number:', this.numbers);

      this._createQueue();
      this.decadeSort();
      // console.info('this.queue:', this.queue)
      this.getSortArr();
      console.info('last this.number:', this.numbers);
    }
  }, {
    key: 'unitSort',
    value: function unitSort() {
      var _this = this;

      this.numbers.forEach(function (number) {
        _this.queue[number % 10].push(number);
      });
    }
  }, {
    key: 'decadeSort',
    value: function decadeSort() {
      var _this2 = this;

      this.numbers.forEach(function (number) {
        _this2.queue[Math.floor(number / 10)].push(number);
      });
    }
  }]);

  return SortBasic;
}();

export { SortBasic as default };