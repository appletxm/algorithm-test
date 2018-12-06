function bubbule(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    console.info(arr);
    for (var j = 0; j < arr.length - 1 - i; j++) {
      var tmp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  console.info('bubbule:', arr);
}

function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    // console.info(arr)
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        var temp = void 0;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.info('selectionSort:', arr);
}

export default {
  bubbule: bubbule,
  selectionSort: selectionSort
};