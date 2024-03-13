<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { payPerson, formatCurrency } from '../store'

const props = defineProps(['id', 'numberOfPerson', 'totalPerPerson', 'paid'])
let paid = ref(false)

function handleChange(e) {
    paid.value = e.target.checked
    payPerson(props.id, paid)
}
</script>
<template>
    <article>
        <header>
            #Person: {{ props.numberOfPerson }}
        </header>
        <p>Total: {{ formatCurrency(props.totalPerPerson) }}</p>
        <footer>
            <input type="checkbox" name="" id="pay" @change="handleChange" /> Paid
        </footer>
    </article>
</template>

<style scoped>
header {
    background-color: #cfeefb;
    text-align: center;
    padding: 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
}

article {
    padding: 0;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #858585;
    margin-bottom: 1rem;
    width: 10rem;
    text-align: center;
}

footer {
    background-color: #cfcfcf;
    padding: 0.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
}

p {
    margin: 0;
    font-weight: 600;
    padding: 1rem;
}

input {
    margin: 0.5rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
}
</style>
