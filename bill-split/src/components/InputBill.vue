<script lang="ts" setup>
import { ref } from 'vue'
import { store, getPerPerson, getGrandTotal, formatCurrency } from '../store'

const total = ref(0)
const tip = ref(0)
const people = ref(0)

function handleSubmit() {
    store.params.total = total.value
    store.params.tipPercent = tip.value
    store.params.people = people.value
    getPerPerson()
    console.log(store)
}
</script>
<template>
    <section>
        <header>
            <h3>Total + Tip: {{ formatCurrency(getGrandTotal()) }}</h3>
            <h3>Remaining: {{ formatCurrency(store.params.remaining) }}</h3>
        </header>
        <form action="" @submit.prevent="handleSubmit">
            <div class="input-group">
                <label for="total">Total</label>
                <input type="number" id="total" required v-model="total" />
            </div>
            <div class="input-group">
                <label for="tip">Tip</label>
                <input type="number" id="tip" required v-model="tip" />
            </div>
            <div class="input-group">
                <label for="people"># People</label>
                <input type="number" id="people" required v-model="people" />
            </div>
            <button>Calculate</button>
        </form>
    </section>


</template>

<style scoped>
.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
}

section {
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #858585;
    margin-bottom: 1rem;
    background-color: #f5f5f5;
}

input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
}

button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 0 0.5rem #858585;
    cursor: pointer;
    transition: background-color 0.3s;
}
</style>
