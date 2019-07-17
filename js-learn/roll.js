class Roll {
    constructor() {
        this.rollList = []
    }
    add(item, rank) {
        if (rank <= 0) {
            return
        }
        this.rollList.push({
            item,
            rank
        });
    }
    start() {
        let totalRank = 0
        const random = Math.random();
        let result = null
        const items = this.rollList.slice().map((item) => {
            totalRank += item.rank
            return item
        })
        let startIndex = 0;
        while (items.length) {
            let item = items.shift()
            const end = startIndex + item.rank / totalRank;
            if (random >= startIndex && random <= end) {
                result = item
                break;
            }
            // console.log('end')
            startIndex = end;
        }
        return result ? result.item : null;
    }
}
let roller = new Roll()
let data = {}
for (let i = 0; i < 10000; i++) {
    roller.add('篮球', 30)
    roller.add('谢谢惠顾', 60)
    roller.add('iphone x', 10)
    let res = roller.start()
    if (data[res]) {
        data[res] += 1
    } else {
        data[res] = 1
    }
}
console.log(data)