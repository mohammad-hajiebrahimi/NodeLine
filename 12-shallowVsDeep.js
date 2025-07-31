const original = {
  name: 'Ali',
  address: {
    city: 'Tehran'
  }
}

const shallowCopy = { ...original }

shallowCopy.address.city = 'Shiraz'

console.log(original.address.city)  // Shiraz ❗

const deepCopy = structuredClone(original)

deepCopy.address.city = 'Shiraz'

console.log(original.address.city)  // Tehran ✅
