var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++){
        if(map[target - nums[i] ] >= 0){
            return [ map[target - nums[i] ], i]
        }
        map[nums[i]] = i;            
     }
 
 }


 var twoSum2 = function(nums, target) {
    let arr = [];
    for (let i = nums.length - 1; i >= 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        if (nums[i] + nums[j] === target) {
          arr.push(i,j);
        }
      }
    }
    return arr;
  };
  let sumres = twoSum2([2,7,89,2,0],9)
  console.log(sumres)