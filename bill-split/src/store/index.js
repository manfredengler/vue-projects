import { reactive } from 'vue'

export const store = reactive({
  params: {
    total: 0,
    tipPercent: 0,
    people: 0,
    remaining: 0
  },
  people: []
})

export function getGrandTotal() {
  return store.params.total * (store.params.tipPercent / 100 + 1)
}

export function getPerPerson() {
  store.people = []

  const people = store.params.people
  const totalPerPerson = getGrandTotal() / people

  store.params.remaining = getGrandTotal()

  for (let i = 0; i < people; i++) {
    store.people.push({
      id: crypto.randomUUID(),
      numberOfPerson: i + 1,
      totalPerPerson,
      paid: false
    })
  }

  getRemaining()
}

function getRemaining() {
  const missingToPay = store.people.filter((person) => !person.paid)
  const remaining = missingToPay.reduce((acc, person) => {
    return acc + person.totalPerPerson
  }, 0)
  store.params.remaining = remaining
}

export function payPerson(id, paid) {
  const person = store.people.find((person) => person.id === id)
  person.paid = paid
  console.log(person)
  getRemaining()
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}
