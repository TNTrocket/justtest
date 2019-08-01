/**
 * @description 数组换位
 */
let testArr = [1,4,6,8,9]
function arrIndexExchange(array, x, y){
    let arr = array.splice(y - 1, 1, array[x - 1])
    array.splice(x - 1, 1, ...arr);
    return array;
};
arrIndexExchange(testArr, 2, 4)