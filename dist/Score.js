var Score = function Score() {
  this.studentName = null;
  this.studentScore = [];
};

Score.prototype.getScoreAverage = function () {
  var age = this.studentScore.reduce(function (a, b) {
    return a + b;
  }) / this.studentScore.length;
  return age;
};

Score.prototype.addScore = function (score) {
  this.studentScore = score;
};

export default Score;