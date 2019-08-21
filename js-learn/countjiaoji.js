/**
 * @description 计算交集
 */
const intersect = (nums1, nums2) => {
  const map = {}
  const res = []
  for (let n of nums1) {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  }
  for (let n of nums2) {
    if (map[n] > 0) {
      res.push(n)
      // map[n]--
    }
  }
  return res
}

let a = [1, 5, 8, 0]
let b = [1, 6, 7, 9, 0]
console.log(intersect(a, b))


function countIntersect(nums1, nums2) {
  let arr = nums1.filter((item) => {
    return nums2.indexOf(item) > -1
  })
  return arr
}
console.log(countIntersect(a, b))