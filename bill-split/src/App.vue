<script lang="ts" setup>
import BillsView from './components/BillsView.vue'
</script>
<template>
    <main>
        <BillsView />
    </main>
</template>

<style>
main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 2rem;
}

@media (min-width: 600px) {
    main {
        flex-wrap: nowrap;
    }
}
</style>
