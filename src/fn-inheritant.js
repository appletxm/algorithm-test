function Range(x, y) {
  this.width = x
  this.height = y
}

Range.prototype.squrt = function() {
  console.log('i am method from Range', this.width, this.height)
  return this.width * this.height
}

function Range2() {}
Range2.prototype = new Range(3, 5)
Range2.prototype.test = function(){console.log('i am method from Range2')}
