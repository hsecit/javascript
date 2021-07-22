// set timer for the front element in queue qnd dequeued it when it finished

import QueuePriority from "./Queue.js";



class Processor {
    constructor() {
        this.queue = new QueuePriority()
    }

    addProcess = (process, priority, timeExec) => {
        this.queue.enqueueProc(process, priority, timeExec)
    }

    frontProcess = () => {
        let front = this.queue.front()

        return front
    }

    async run() {
        const end = this.queue.isEmpty()
        while (!end) {
          await this.timer(this.frontProcess().time)
          if (end) break;
        }
    }

    async timer(time) {
        return await new Promise(resolve => {
            setInterval(() => {
                this.queue.dequeue()
                console.log(`PROCESS_END: ${this.queue.front().element}`);
                this.show()
            }, time * 100)
        })
    }

    show = () => {
        console.log(this.queue.items)
    }
}


const processor = new Processor()

processor.addProcess('calulator operation', 29, 30)
processor.addProcess('launch word', 69, 100)
processor.addProcess('open google chrome', 56, 50)
processor.addProcess('mailbox', 90, 19)

// processor.show()

processor.run()