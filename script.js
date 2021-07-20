import QueuePriority from './Queue.js'

const queue = new QueuePriority()


const priority = document.getElementById('priority')
const task = document.getElementById('task')
const btn = document.getElementById('btn')

const result = document.getElementById('res')

const front = document.getElementById('front')

btn.addEventListener('click', () => {
    if (priority.value !== '' && task.value !== 0) {
        queue.enqueue(task.value, parseInt(priority.value))
        mountComponent()
    }
})

const mountComponent = () => {
    showFront()
    // delete the old elment 
    updateUi()
    // add fresh elemnt
    for (let i = 0; i < queue.items.length; i++) {
        addElementToQueueUi(queue.items[i].toString())

    }
}

const showFront = () => {
    if (queue.front() !== null) {
        front.innerText = queue.front().toString()
    }
}



const addElementToQueueUi = (el) => {
    const element = document.createElement('p')
    element.innerHTML = el
    result.appendChild(element)
}

const updateUi = () => {
    const Pcollection = document.getElementsByTagName('p')
    for (let i = 0; i < Pcollection.length; i++) {
        const element = Pcollection[i];
        element.remove()

    }
}

