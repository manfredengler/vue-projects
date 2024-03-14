<script lang="ts" setup>
import { useFeedStore } from '@/stores/store';

const feedStore = useFeedStore();

</script>

<template>
    <section v-if="feedStore.current.posts">
        <h2>{{ feedStore.current.source.name }}</h2>
        <ul>
            <details v-for="post in feedStore.current.posts" :key="post.id">
                <summary>
                    {{ post.title }}
                </summary>
                <article>
                    <div v-html="post.content"></div>
                    <footer><a :href="post.url">{{ post.pubdate }}</a></footer>
                </article>
            </details>
        </ul>
    </section>
    <section v-else>
        <p>No feed selected</p>
    </section>
</template>


<style>
section {
    flex: 1;
    padding: 2em;
    background-color: #23272e;
    color: #a4a5a6;
}

h2 {
    margin-bottom: 1em;
}

ul {
    list-style: none;
    padding: 0;
}

details {
    margin-bottom: 1em;
}

summary {
    cursor: pointer;
    font-size: 1.2em;
    font-weight: semibold;
}

img {
    padding: 1em 0;
}

p {
    margin-top: 2em;
    color: #a4a5a6;
}
</style>