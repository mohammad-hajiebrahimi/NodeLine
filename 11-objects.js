const person = {
  name: 'Sara',
  age: 30,
  job: 'Engineer'
}

for (const key in person) {
  const value = person[key]
  console.log(key + ':', value)
}


for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ':', person[key])
  }
}
