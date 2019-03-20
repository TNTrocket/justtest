 function erfen(arr, target) {
   let start = 0;
   let end = arr.length - 1;
   while (start <= end) {
     let middleIndex = parseInt((start + end) / 2)
     if (arr[middleIndex] > target) {
       console.log('小了')
       end = middleIndex - 1
     } else if (arr[middleIndex] < target) {
       console.log('大了')
       start = middleIndex + 1
     } else if (arr[middleIndex] === target) {
       return middleIndex
     } else {
       return -1
     }
   }
 }
 erfen([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)
