function curry(fn) {
    let args = [].slice.call(arguments, 1)
    let fnLength = fn.length
    return function recursion() {
        let args2 = [].slice.call(arguments)
        args = args.concat(args2)
        if (args.length < fnLength) {
            return recursion
        } else {
            fn.apply(this, args)
        }
    }
}

function test(a, b, c) {
    console.log(a + b + c)
}

let test2 = curry(test)
test2(1,2)