import Dictionary from './Dictionary.js'

function dicStatsWord(string) {
  const dic = new Dictionary()
  const words = string.match(/[^\s]+/g)
  console.info(words)

  words.forEach(word => {
    if (dic.find(word)) {
      dic.add(word, dic.find(word) + 1)
    } else {
      dic.add(word, 1)
    }
  })

  dic.showAll()
}

export default dicStatsWord
