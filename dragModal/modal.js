class modal {
    constructor() {
        this.warpper = document.createElement('div')
        this.bodyDom = document.querySelector('body')

        this.data = {
            x: 200,
            y: 300
        }
        for (let i in this.data) {
            this.defineReactive(this.data, i, this.data[i])
        }
        this.init()
    }
    render() {
        this.warpper.style = `position:fixed;width:200px;height:300px;
        top: ${this.data.y}px; left:${this.data.x}px; background: #000`;
        let dom = `<div class="modal">
        <div class="diaog" style="color:#fff">555</div>
        </div>`
        this.warpper.innerHTML = dom
        this.bodyDom.appendChild(this.warpper)
    }
    defineReactive(data, key, val) {
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function () {
                return val;
            },
            set: (newVal) => {
                console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
                val = newVal;
                this.render()
            }
        });
    }
    init() {
        this.render()
        this.bindDragEvent()
    }
    bindDragEvent() {
        this.warpper.onmousedown = (e) => {
            if (e.target.className === 'diaog') {
                const {
                    x,
                    y
                } = this.warpper.getBoundingClientRect();
                this.warpperX = x
                this.warpperY = y
                this.start = true
                this.diffX = e.clientX
                this.diffY = e.clientY
            }
        }
        window.onmousemove = (e) => {
            if (this.start) {
                this.data.x = this.warpperX + e.clientX - this.diffX
                this.data.y = this.warpperY + e.clientY - this.diffY
            }
        }
        window.onmouseup = (e) => {
            this.start = false
            this.diffX = 0
            this.diffY = 0
        }
    }
}
new modal()

let ttt = {
    ttt: 123
}

Object.defineProperty(ttt, 'ttt', {
    get() {
        //    debugger
        // let value = getter.call(ttt)
        // debugger
        // console.log(value)
        return 123
    },
    set(val) {

    }
})
let pro = Object.getOwnPropertyDescriptor(ttt, 'ttt')
console.log('pro', pro)
let getter = pro.get
ttt.ttt = 234
// console.log(ttt.ttt)
console.log(getter.call(ttt))