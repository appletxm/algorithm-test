class Complex {
  constructor(real, imaginary) {
    this.r = real
    this.i = imaginary
  }

  plus(that) {
    return new Complex(this.r + that.r, this.i + that.i)
  }

  times(that) {
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * thar.r)
  }

  static sum(c, d) {
    return c.plus(d)
  }

  static product(c, d) {
    return c.times(d)
  }

  get real() {
    return this.r
  }

  get imaginary() {
    return this.i
  }
}
