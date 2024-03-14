<script lang="ts" setup>
import HeaderNav from './HeaderNav.vue'
import SideBar from './SideBar.vue'
import PostsSection from './PostsSection.vue'
</script>

<template>
    <HeaderNav />
    <main>
        <SideBar />
        <PostsSection />
    </main>

</template>

<style>
main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #23272e;
    color: #a4a5a6;
    min-height: 100vh;
}
</style>