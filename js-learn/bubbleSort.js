function bubbleSort(arr) {   
  var len = arr.length;   
  for (var i = 0; i < len - 1; i++) {   
      for (var j = 0; j < len - 1 - i; j++) {   
          if (arr[j] > arr[j+1]) {        // 相邻元素两两对比   
              var temp = arr[j+1];        // 元素交换   
              arr[j+1] = arr[j];   
              arr[j] = temp;   
          }   
      }   
  }
  return arr;   
}
var arr=[1,90,3,4,1,60,55,123]
var result = bubbleSort(arr)
console.log(result)