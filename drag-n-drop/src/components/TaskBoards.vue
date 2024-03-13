<script lang="ts" setup>
import { reactive } from 'vue'
import InputNewTask from './InputNewTask.vue'
let boards = reactive([
    {
        id: crypto.randomUUID(),
        name: 'To Do',
        tasks: [
            {
                id: crypto.randomUUID(),
                name: 'Item 1'
            },
            {
                id: crypto.randomUUID(),
                name: 'Item 2'
            },
            {
                id: crypto.randomUUID(),
                name: 'Item 3'
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        name: 'Done',
        tasks: [
            {
                id: crypto.randomUUID(),
                name: 'Item a'
            },
            {
                id: crypto.randomUUID(),
                name: 'Item b'
            }
        ]
    }
])

function handleNewTask(text, board) {
    console.log(text, board.id, board.name)
    board.tasks.push({
        id: crypto.randomUUID(),
        name: text
    })
}

function handleNewBoard() {
    const name = prompt('Enter the name of the board')
    if (name.trim() === '') return
    boards.push({
        id: crypto.randomUUID(),
        name: name,
        tasks: []
    })
}

function handleDragStart(event, task, board) {
    event.dataTransfer.setData('text/plain', JSON.stringify({ boardId: board.id, taskId: task.id }))
}

function handleDragOver(event, board) {
    const { boardId, taskId } = JSON.parse(event.dataTransfer.getData('text/plain'))
    console.log(boardId, taskId, board.id)
    if (boardId === board.id) return
    board.tasks.push(boards.find(b => b.id === boardId).tasks.find(t => t.id === taskId))
    boards.find(b => b.id === boardId).tasks = boards.find(b => b.id === boardId).tasks.filter(t => t.id !== taskId)
}

</script>

<template>
    <nav>
        <ul>
            <li>
                <a href="#" @click.prevent="handleNewBoard">Create board</a>
            </li>
        </ul>
    </nav>

    <main>
        <section class="board" @drop="handleDragOver($event, board)" @dragover.prevent @dragenter.prevent
            v-for="board in boards" :key="board.id">
            <h2>{{ board.name }}</h2>
            <InputNewTask @on-new-task="(text) => handleNewTask(text, board)" />
            <ul>
                <li class="task" draggable="true" @dragstart="handleDragStart($event, task, board)"
                    v-for="task in board.tasks" :key="task.id">
                    {{ task.name }}
                </li>
            </ul>
        </section>
    </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
    background-color: #a6a6a6;
    padding: 1rem;
    text-align: right;
    width: auto;
    display: flex;
    flex-direction: row;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #000;
}

main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
}

ul {
    padding: 0;
}

.board {
    background-color: #e8e8e8;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 30%;
    box-shadow: 0 0 0.5rem #858585;
}

.task {
    background-color: #fff;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #858585;
    text-align: center;
}
</style>