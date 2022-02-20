const Range = class {
  constructor(from, to) {
    this.from = from
    this.to = to
  }

  has(x) {
    return typeof x === 'number' && this.from <= x && this.to >= x
  }

  toString() {
    return `{ x | ${this.from} <= x <= ${this.to}}`
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from)
    let last = this.to

    return {
      next() {
        return next <= last ? ({value: next++, done: false}) : ({done: true})
      },
      [Symbol.iterator](){
        return this
      }
    }
  }
}

function map(iterable, fn) {
  const iterator = iterable[Symbol.iterator]()
  return {
    [Symbol.iterator]() { return this },
    next() {
      const nextVal = iterator.next()
      if (nextVal.done) {
        return nextVal
      } else {
        return {
          value: fn(nextVal.value)
        }
      }
    }
  }
}

function word(s) {
  const r = /\s+|$/g
  r.lastIndex = s.match(/[^]/).index

  return {
    [Symbol.iterator]() { return this },
    next() {
      let start = r.lastIndex

      if (start < s.length) {
        const match = r.exec(s)

        console.log(match)

        if (match) {
          return { value: s.substring(start, match.index) }
        }
      }

      return { done: true }
    },
    return() {
      console.log('***call break***')
      return { value: 999, done: true}
    }
  }
}

export default { map, word, Range }
