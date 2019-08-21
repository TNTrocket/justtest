class lazyManClass {
    constructor(name) {
      this.name = name;
      this.taskList = [];
      setTimeout(() => {
        console.log(`Hi I am ${name}`)
        this.next();
      }, 0);
    }
    sleep(time) {
      let fn = () => {
        setTimeout(() => {
          console.log(`waiter${time}s`);
          this.next();
        }, time * 1000);
      };
      this.taskList.push(fn);
      return this;
    }
    eat(val) {
      let fn = () => {
        console.log(val);
        this.next();
      };
      this.taskList.push(fn);
      return this;
    }
    sleepFirst(time) {
      let fn = () => {
        setTimeout(() => {
          console.log(`waiter${time}s`);
          this.next();
        }, time * 1000);
      };
      this.taskList.unshift(fn);
      return this;
    }
    next() {
      let task = this.taskList.shift();
      task && task();
    }
  }

  function LazyMan(val) {
    return new lazyManClass(val);
  }
  LazyMan('Tony')
    .eat('lunch')
    .eat('dinner')
    .sleepFirst(5)
    .sleep(4)
    .eat('junk food');