const Score = function () {
  this.studentName = null
  this.studentScore = []
}

Score.prototype.getScoreAverage = function() {
  const age = this.studentScore.reduce((a, b) => a + b) / this.studentScore.length
  return age
}

Score.prototype.addScore = function(score) {
  this.studentScore = score
}

export default Score
