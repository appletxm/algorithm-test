class ComplexClass {
  constructor(real, imaginary) {
    this.r = real
    this.i = imaginary

    console.log(new.target.name)
  }

  // #myProperty = '999'

  static myProperty2 = '8888'

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

class Child extends ComplexClass {
  constructor(real, imaginary) {
    super(real, imaginary)
  }
}

export default ComplexClass
