function dikae(b) {
  const arr = b.reduce((x, y) => {
    const matched = []
    x.forEach(item => y.forEach(item2 => matched.push([item, item2])))
    return matched
  })

  console.info('******', JSON.stringify(arr))
}

export default dikae
