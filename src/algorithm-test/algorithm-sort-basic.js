export default class SortBasic {
  constructor() {
    this.numbers = []
    this.queue = []
  }

  _createQueue() {
    for (let i = 0; i < 10; i++) {
      this.queue[i] = []
    }
  }

  getSortArr () {
    let numberArr = []
    this.queue.forEach((item) => {
      numberArr = numberArr.concat(item)
    })
    this.numbers = numberArr
  }

  doSort(numbers) {
    this.numbers = numbers
    console.info('start this.number:', this.numbers)

    this._createQueue()
    this.unitSort()
    // console.info('this.queue:', this.queue)

    this.getSortArr()
    console.info('secondary this.number:', this.numbers)

    this._createQueue()
    this.decadeSort()
    // console.info('this.queue:', this.queue)
    this.getSortArr()
    console.info('last this.number:', this.numbers)
  }

  unitSort() {
    this.numbers.forEach(number => {
      this.queue[number % 10].push(number)
    })
  }

  decadeSort() {
    this.numbers.forEach(number => {
      this.queue[Math.floor(number / 10)].push(number)
    })
  }
}
