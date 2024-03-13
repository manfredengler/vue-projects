<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const taskName = ref('')
const emits = defineEmits(["onNewTask"])

function handleSubmit() {
    if (taskName.value.trim() !== '') {
        console.log(taskName.value)
        emits('onNewTask', taskName.value)
        taskName.value = ''
    }
}
</script>

<template>
    <form action="" @submit.prevent="handleSubmit">
        <input type="text" v-model="taskName">
    </form>
</template>

<style>
input {
    width: 100%;
    margin: auto;
    display: inline-flex;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-bottom: 10px;
    box-shadow: 0 0 0.5rem #858585;
}

form {}
</style>