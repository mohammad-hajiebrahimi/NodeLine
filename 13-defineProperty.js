const user = {}

// define a normal read-only property
Object.defineProperty(user, 'username', {
  value: 'Ali123',
  writable: false,      // cannot change value
  enumerable: true,     // will show in for...in or Object.keys
  configurable: false   // cannot delete or redefine
})

// define a hidden property
Object.defineProperty(user, 'password', {
  value: 'secretPass',
  writable: true,
  enumerable: false,    // won't show in loops
  configurable: true
})

// define a dynamic property using getter/setter
let ageValue = 20
Object.defineProperty(user, 'age', {
  get: function () {
    return ageValue
  },
  set: function (newAge) {
    if (newAge > 0 && newAge < 120) {
      ageValue = newAge
    } else {
      console.log('invalid age')
    }
  },
  enumerable: true,
  configurable: true
})

// show all enumerable properties
console.log('Object.keys:', Object.keys(user))  // ['username', 'age']

// trying to change username (won’t work)
user.username = 'Sara456'
console.log('Username:', user.username)  // still 'Ali123'

// change password (it works, but still hidden)
user.password = 'newPass'
console.log('Password:', user.password)  // 'newPass'
console.log('All entries:', Object.entries(user))  // password won’t show

// use age setter
user.age = 25
console.log('Age:', user.age)  // 25

user.age = -5                 // invalid
console.log('Age:', user.age) // still 25
