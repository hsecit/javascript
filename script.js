import QueuePriority from './Queue.js'

const queue = new QueuePriority()


const priority = document.getElementById('priority')
const task = document.getElementById('task')
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')

const result = document.getElementById('res')

const front = document.getElementById('front')

btn.addEventListener('click', () => {
    if (priority.value !== '' && task.value !== 0) {
        queue.enqueue(task.value, parseInt(priority.value))
        componentDidMount()
    }
})

// show the data inside the queue list
btn2.addEventListener('click', () => {
    console.log(queue.items);
})

const componentDidMount = () => {
    console.log("MOUNT_COMP");
    showFront()
    // delete the old elment 
    deleteElement()
    
    for (let i = 0; i < queue.items.length; i++) {
        addElementToHtml(queue.items[i].toString())
    }

}

const showFront = () => {
    if (queue.front() !== null) {
        front.innerText = queue.front().toString()
    }
}



const addElementToHtml = (el) => {
    const element = document.createElement('p')
    element.innerHTML = el
    document.getElementById('thread').appendChild(element)
}



async function deleteElement() {
    return await new Promise(resolve => {
        document.getElementById('thread').remove()
        const temp = document.createElement('div')
        temp.setAttribute('id', 'thread')
        result.appendChild(temp)

        resolve('updated')
    })


}

