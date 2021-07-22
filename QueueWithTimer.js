// set timer for the front element in queue qnd dequeued it when it finished

import EventEmitter from 'events'
import QueuePriority from "./Queue.js";


class Emitter extends EventEmitter { }

export class Processor {
    constructor() {
        this.queue = new QueuePriority()
        this.emiter = new Emitter()
        this.emitters()

        // test 
        setTimeout(() => {
            this.emiter.emit('new_process','emit new process 1','39')
        },2000)

        setTimeout(() => {
            this.emiter.emit('new_process','emit new process 2','70')
        },3000)

        setTimeout(() => {
            this.emiter.emit('new_process','emit last one','100')
        },10000)



    }

    addProcess = (process, priority, timeExec) => {
        this.queue.enqueueProc(process, priority, timeExec)
    }

    frontProcess = () => {
        let front = this.queue.front()

        return front
    }

    emitters = () => {
        this.emiter.on('timer', () => {
            if (this.queue.items.length !== 0) {
                this.timer(this.frontProcess().time)
            }

        })

        this.emiter.on('new_process',(element,priority) => {
            this.addProcess(element,priority,40)
        })
    }

     run() {
        this.emiter.emit('timer')
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

    async timerSignal(time) {
        if (this.singnal == 'change') {

        } else {
            return await new Promise(resolve => {
                setInterval(() => {
                    this.queue.dequeue()
                    console.log(`PROCESS_END: ${this.queue.front().element}`);
                    this.show()
                }, time * 100)
            })
        }
    }

    processHandler(event) {

    }

    show = () => {
        console.log(this.queue.items)
    }
}


 