let arr1 = [{
    id: 1
}, {
    id: 2
}, {
    id: 3
}, {
    id: 4
}, {
    id: 5
}, {
    id: 6
}, {
    id: 7
}]
let arr2 = [{
    id: 1
}, {
    id: 2
}, {
    id: 3
}]

function deWight(arr1, arr2) {
    let arrLoop = arr1.length >= arr2.length ? arr2 : arr1
    let searchArr = arr1.length >= arr2.length ? arr1 : arr2
    let temp = []
    arrLoop.map((item) => {
        searchArr.find((fItem) => {
            if (fItem.id === item.id) {
                temp.push(item)
            }
        })
    })
    return temp
}

let testArr = deWight(arr1, arr2)