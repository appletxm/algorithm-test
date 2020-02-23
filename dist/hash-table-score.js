function getStudentScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStudentNumb() {
  var num = '';
  for (var i = 0; i < 9; i++) {
    num += Math.floor(Math.random() * 10);
  }

  return num;
}

function genStudentData(len) {
  var arr = new Array(len);
  for (var i = 0; i < len; i++) {
    var num = getStudentNumb();
    var score = getStudentScore(50, 100);
    arr[i] = num + score;
  }

  return arr;
}

export default genStudentData;