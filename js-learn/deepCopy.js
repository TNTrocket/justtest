function deepCopy(obj){
    let newObj = {}
    for(let i in obj){
        if(typeof obj[i] === 'object'){
            newObj[i] = deepCopy(obj[i])
        } else {
            newObj[i] = obj[i]
        }
    }
    return newObj
}


let test = {okc:{age:{test:12}}}
let newTest = deepCopy(test)
console.log(test.okc === newTest.okc)