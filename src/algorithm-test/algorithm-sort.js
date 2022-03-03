function bubbule(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // console.info(arr)
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let tmp = arr[j]
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }

  console.info('bubbule:', arr)
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // console.info(arr)
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        let temp
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.info('selectionSort:', arr)
}

export default {
  bubbule,
  selectionSort
}
