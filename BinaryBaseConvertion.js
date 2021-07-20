import Stack from "./Stack.js";


const stack = new Stack()

// binary 
// num / 2

class Binary {
    constructor(number) {
        this.number = number
        this.copy = number2ew Stack()
    }

    divideBy2 = () => {
        while (this.number > 0) {
            const rem = Math.floor(this.number % 2)
            this.remStack.push(rem)
            this.number = Math.floor(this.number/2)
        }
    }

    present = () => {
        this.divideBy2()
        const binary = this.remStack.reverse()
        const binaryStr = binary.join().replaceAll(',','')
        console.log(`${this.copy} = ${binaryStr}`);
    }
}

const bin = new Binary(10)
bin.present()

const bin1 = new Binary(64)
bin1.present()

const bin2 = new Binary(128)
bin2.present()