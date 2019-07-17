let testArr = [0, 12, 0, 0, 22, 0, 14]

// function sortArr(arr) {
//     arr.sort((fir, sec) => {
//         return fir < sec
//     })
//     return arr
// }
// let all = sortArr(testArr)

// console.log('all', all)


function sortArr2(arr) {
    let arrLength = arr.length
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }
    return arr
}
let all2 = sortArr2(testArr)

console.log('all2', all2)