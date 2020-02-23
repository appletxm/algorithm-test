function getStudentScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getStudentNumb() {
  let num = ''
  for (let i = 0; i < 9; i++) {
    num += Math.floor(Math.random() * 10)
  }

  return num
}

function genStudentData(len) {
  let arr = new Array(len)
  for (let i = 0; i < len; i++) {
    let num = getStudentNumb()
    let score = getStudentScore(50, 100)
    arr[i] = num + score
  }

  return arr
}

export default genStudentData
