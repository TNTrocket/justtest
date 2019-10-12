let objxx = {
    valueOf() {
      return {};
    },
    toString() {
      return 13;
    },
    [Symbol.toPrimitive]: function(hit) {
      console.log('hit', hit);
      return 13;
    }
  };
  console.log(+objxx);
  function add(n) {
    var fn = function(x) {
      return add(n + x);
    };

    fn.valueOf = function() {
      return n;
    };

    return fn;
  }
  console.log(+add(1)(2))