
// let items = new WeakMap()

class Stack {
    constructor() {
        this.items = []
    }

    toString = () => {
        return `elements: ${this.items.toString()}`
    }
    push = (el) => {
        this.items.push(el)
    }

    pop = () => {
        this.items.pop()
    }

    isEmpty = () => {
        return this.items.length == 0
    }

    size = () =>  {
        return this.items.length
    }

    clear = () => {
        this.items = []
    }

    // show the last item of the stack
    peek = () => {
        return this.items[this.items.length - 1]
    }

    reverse = () => {
        return this.items.reverse()
    }

    print = () => {
        console.log(this.items)
    }
}

export default Stack ;

// const stack = new Stack()
// console.log(stack.isEmpty());

// stack.push(7)
// stack.push(9)
// stack.push(6)
// stack.push(72)
// stack.push(73)
// stack.push(47)

