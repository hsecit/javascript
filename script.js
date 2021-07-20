import QueuePriority from './Queue.js'

const queue = new QueuePriority()


const priority = document.getElementById('priority')
const task =  document.getElementById('task')
const btn = document.getElementById('btn')

const result = document.getElementById('res')

const front =  document.getElementById('front')

btn.addEventListener('click',()=> {
    if ( priority.value !=='' && task.value!== 0 ) {
        queue.enqueue(task.value,parseInt(priority.value))
        console.log(queue.items);

        if (queue.front()!== null) {
            front.innerText = queue.front().toString()
        }
 
        for (let i = 0; i < queue.items.length; i++) {
            addElementToQueueUi(queue.items[i].toString())
            
        }
    }
})




const addElementToQueueUi = (el) => {
    const element = document.createElement('div')
    element.innerHTML = el
    result.appendChild(element)
}

