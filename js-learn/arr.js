function arr(arrItem){
  var obj={}
  var temp=[]
  arrItem.forEach(function(item){
    if(!obj[item]){
      obj[item] = 1
      temp.push(item)
    }
  })
  console.log(temp)
}

var testArr = [1,2,3,1,2]

arr(testArr)