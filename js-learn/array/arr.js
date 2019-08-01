/**
 * @description  数组去重
 * @param {array} arrItem
 */
function arr(arrItem) {
  var obj = {}
  var temp = []
  arrItem.forEach(function (item) {
    if (!obj[item]) {
      obj[item] = 1
      temp.push(item)
    }
  })
  console.log(temp)
}

let testArr = [1, 2, 3, 1, 2]
arr(testArr)
let newArr = Array.from(new Set([...testArr]))


/**
 * @description reduce 运用
 */
let arr2 = [1,2,3,4,5]
let resData = arr2.reduce((res, val)=>{
  console.log(res, val)
   return res + val
}, 0)
console.log(resData)



/**
 * @description isArray  es6有 Array.isArray
 */
function isrealArray(arr){
   return Object.prototype.toString.call(arr) === '[object Array]'
}