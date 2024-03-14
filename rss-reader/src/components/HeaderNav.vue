<script lang="ts" setup>
import { ref } from 'vue';
import { useFeedStore } from '@/stores/store';

const url = ref('');
const feedStore = useFeedStore();

function handleSubmit() {
    if (!url.value) return;
    feedStore.registerNewSource(url.value);
    url.value = '';
}
</script>

<template>
    <header>
        <form action="" @submit.prevent="handleSubmit">
            <input type="url" placeholder="Enter RSS feed URL" required v-model="url" />
            <input class="btn" type="submit" value="Add feed" />
        </form>
    </header>
</template>


<style>
header {
    background-color: #1e2227;
    padding: 1em;
    text-align: center;
    justify-items: center;
    border-bottom: #6388d2;
}

input {
    padding: 0.5em 1em;
    border-radius: 5px 0 0 5px;
    background-color: #34383e;
    border: 1px solid #42464e;
    color: #a4a5a6;
    cursor: pointer;
}

.btn {
    background-color: #42464e;
    color: #a4a5a6;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: background-color 0.3s;
}
</style>