<script lang="ts" setup>
import { useFeedStore } from '@/stores/store';

const feedStore = useFeedStore();

function handleClick(source) {
    feedStore.loadSource(source);
}
</script>

<template>
    <nav>
        <ul>
            <li v-for="source in feedStore.sources" :key="source.id">
                <a href="#" @click.prevent="handleClick(source)">{{ source.name }}</a>
            </li>
        </ul>
    </nav>
</template>



<style>
nav {
    background-color: #1e2227;
    padding: 2em;
    text-align: left;
    justify-items: left;
}

li {
    list-style: none;
    padding: 0.5em 0;
}
</style>