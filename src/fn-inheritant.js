function Range(x, y) {
  this.width = x
  this.height = y
}

Range.prototype.squrt = function() {
  console.log('i am method from Range', this.width, this.height)
  return this.width * this.height
}

function Range2(z) {
  this.z = z
}
// Range2.prototype = new Range(3, 5)
// Range2.prototype.constructor = Range2
Range2.prototype.__proto__ = new Range(3, 5)
Range2.prototype.test = function(){console.log('i am method from Range2')}
