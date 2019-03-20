Function.prototype.myCall = function () {
    let argumentsList = Array.prototype.slice.call(arguments)
    let self = argumentsList.shift()
    self.fn = this;
    self.fn(...argumentsList)
}

function test(i, t) {
    console.log(this.a, i, t)
}
let ok = {
    a: 45
}
test.myCall(ok, 90, 8)