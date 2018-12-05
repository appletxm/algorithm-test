function bubbule(arr) {
  for (let i =0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // console.info(arr)
      let tmp = arr[j]
      if (arr[j] > arr[j+1]) {
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }

  console.info('bubbule:', arr)
}



export default {bubbule}