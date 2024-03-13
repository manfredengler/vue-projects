<script lang="ts" setup>
import { getGrandTotal, store, formatCurrency } from '../store'
import PersonCard from './PersonCard.vue'
</script>

<template>
  <section>
    <header>
      <h1>Bill Split</h1>
      <p v-if="store.people.length === 0">No people still</p>
    </header>
    <ul>
      <PersonCard
        v-for="person in store.people"
        :key="person.id"
        :id="person.id"
        :numberOfPerson="person.numberOfPerson"
        :totalPerPerson="person.totalPerPerson"
        :paid="person.paid"
      />
    </ul>
  </section>
</template>

<style scoped>
article {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #858585;
  margin-bottom: 1rem;
  width: 10rem;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}

section {
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #858585;
  margin-bottom: 1rem;
  background-color: #f5f5f5;
}
</style>
