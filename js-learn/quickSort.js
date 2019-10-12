function quickSort(arr) {
  /* 快排
   * @判断传递进来的数组长度是否需要分割
   * @定义左边数组，定义右边数组，定义基准值为数组的第一个元素
   * @i的索引从1开始，是因为第一个(0)作为了基准值，然后循环遍历
   * @判断当前元素arr[i]大于或者小于基准值，小于放在left数组里，大于放在right数组里
   * 判断完成后利用递归继续将分隔出来的子数组进行轮询分隔，然后通过concat合并数组，返回新数组
   */
  if(arr.length <= 1) return arr
  
  let left = []
  let right = []
  let pivot = arr[0]
  
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return this.quickSort(left).concat(pivot, this.quickSort(right))
}