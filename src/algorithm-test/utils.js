function generateData(number, max) {
  const data = []

  for(let i = 0; i < number; i++) {
    data.push(Math.ceil(Math.random() * max))
  }

  return data
}

export default { generateData }
