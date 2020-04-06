const SearchCommonWord = class {
  constructor() {
    this.firstStr = ''
    this.secondStr = ''
  }

  initArray(str1, str2) {
    let lcsarr = new Array(str1.length + 1)
    for (let i = 0; i < str1.length; i++) {
      lcsarr[i] = new Array(str2.length + 1)
      for (let j = 0; j < str2.length; j++) {
        lcsarr[i][j] = 0
      }
    }

    return lcsarr
  }

  goGetCommonStr(str1, str2) {
    this.firstStr = str1
    this.secondStr = str2

    let max = 0
    let index = 0
    let lcsarr = this.initArray(str1, str2)

    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (i === 0 || j === 0) {
          lcsarr[i][j] = 0
        } else {
          if (str1[i - 1] === str2[j - 1]) {
            lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1
          } else {
            lcsarr[i][j] = 0
          }
        }

        if (max < lcsarr[i][j]) {
          max = lcsarr[i][j]
          index = i
        }
      }
    }

    let str = ''
    if (max > 0) {
      for (let i = index - max; i <= max; i++) {
        str += str2[i]
      }
    }

    return str
  }

  goGetCommonStrMy(str1, str2) {
    let max = 0
    let pos = null
    let countArr = this.initArray(str1, str2)

    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] !== str2[j]) {
          countArr[i][j] = 0
        } else {
          countArr[i][j] = i > 0 && j > 0 ? (countArr[i - 1][j - 1] + 1) : 1
        }

        if (countArr[i][j] > max) {
          max = countArr[i][j]
          pos = j
        }
      }
    }

    // console.info(max, pos)

    let str = ''
    if (max <= 0) {
      return str
    } else {
      let maxIndex = pos
      let minIndex = pos - max + 1
      // console.info(`${minIndex} - ${maxIndex} `)
      for (let k = minIndex; k <= maxIndex; k++) {
        str += str2[k]
      }
      return str
    }
  }
}
export default SearchCommonWord
