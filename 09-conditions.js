// Program to classify a person based on age and print a message accordingly

const personAge = 22
const personName = 'Alice'

// if-else condition
if (personAge < 13) {
  console.log(personName + ' is a child.')
} else if (personAge >= 13 && personAge < 18) {
  console.log(personName + ' is a teenager.')
} else if (personAge >= 18 && personAge < 60) {
  console.log(personName + ' is an adult.')
} else {
  console.log(personName + ' is a senior.')
}

// ternary condition – quick check if eligible to vote
const canVote = personAge >= 18 ? 'Yes' : 'No'
console.log('Can vote:', canVote)

// switch condition – activity suggestion based on day
const today = 'friday1'

switch (today) {
  case 'monday':
    console.log('Start of the work week.')
    break
  case 'friday':
    console.log('Almost weekend!')
    break
  case 'saturday':
  case 'sunday':
    console.log('Enjoy your weekend!')
    break
  default:
    console.log('Just another day.')
}
