let testArr = [0, 12, 0, 0, 22, 0, 14]
/**
 * @description 排序
 * @param {array} arr 
 */
function sortArr(arr) {
    arr.sort((fir, sec) => {
        return fir < sec
    })
    return arr
}
let all = sortArr(testArr)
console.log('all', all)

/**
 * @description 移动零
 * @param {*} arr 
 */
function moveZeroToLast(arr) {
    let index = 0;
    for (let i = 0, length = arr.length; i < length; i++) {
        if (arr[i] === 0) {
            index++;
        } else if (index !== 0) {
            arr[i - index] = arr[i];
            arr[i] = 0;
        }
    }
    return arr;
}
let all3 = moveZeroToLast(testArr);
console.log('all3', all3);