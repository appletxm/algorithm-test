// var arr = [10,5,11,7,8,9];

// function getMaxProfit(arr) {
//   const map = new Map()
//   const len = arr.length

//   // for(let i = 0; i < len; i++) {
//   //   for (let j = 0; j < len - 1; j++) {
//   //     map.set([a[i], a[j]], Math.abs(a[i] - a[j]))
//   //   }
//   // }

//   let minIndex = 0
//   for(let i = 0; i < len; i++) {
//     minIndex = i

//     for(let j = i + 1; j < len; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j
//       }
//     }

//     const temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
//   }


//   let min = arr[0]
//   for(let i = 1; i < len; i++) {
//     if (min > arr[i]) {
//       min = arr[i]
//     }
//   }

//   let max = arr[0]
//   for(let j = 1; j < len; i++) {
//     if (max < arr[j]) {
//       max = arr[j]
//     }
//   }


//   let min = arr[0]
//   let max = arr[0]

//   for(let i = 1; i < len; i++) {
//     if (min > arr[i]) {
//       min = arr[i]
//     }

//     if (max < arr[j]) {
//       max = arr[j]
//     }
//   }

//   return max - min
// }

// console.log(getMaxProfit(arr))
// // 11-5=6

// const len = arr.length
// var arr = [10,5,11,7,8,9];
// let min = arr[0]
// let max = arr[0]

// for(let i = 1; i < len; i++) {
//   if (min > arr[i]) {
//     min = arr[i]
//   }

//   if (max < arr[j]) {
//     max = arr[j]
//   }
// }

// console.log(max - min)




