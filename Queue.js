class Queue {
    constructor() {
        this.items = []
    }

    //  add element in queue
    enqueue = (el) => {
        this.items.push(el)
    }

    // remove the first elemet nin queue
    dequeue = () => {
        return this.items.shift()
    }

    front = () => {
        return this.items[0]
    }

    isEmpty = () => {
        return this.items.length === 0
    }

    size = () => {
        return this.items.length
    }

    print = () => {
        let thread = ''
        this.items.forEach((el) => {
            thread += `|${el}|`
        })

        console.log(thread);
    }
}

class QueueElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }

    toString = () => {
        return `(${this.priority}) ${this.element}`
    }
}

class QueuePriority {
    constructor() {
        this.items = []
    }

    //  add element in queue
    enqueue = (elment, priority = 10) => {
        let queueElement = new QueueElement(elment, priority)
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) { 
                this.items.splice(i, 0, queueElement); 
                added = true;
                break; 
            }
        }
        if (!added) {
            this.items.push(queueElement); //{5}
        }
    }

    front = () => {
        return this.items[0] || new QueueElement('None')
    }

    isEmpty = () => {
        return this.items.length === 0
    }

    size = () => {
        return this.items.length
    }

    print = () => {
        let thread = ''
        this.items.forEach((el) => {
            thread += `\t|${el.element} ${el.priority}|\n\t----------\n`
        })

        console.log(thread);
    }
}


export default QueuePriority