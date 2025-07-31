// Start with an empty list
const taskList = []

console.log('Initial list:', taskList)

// Add tasks to the end using push()
taskList.push('Buy milk')
taskList.push('Walk the dog')
console.log('After push:', taskList)

// Remove last task using pop()
const lastTask = taskList.pop()
console.log('Removed (pop):', lastTask)
console.log('List now:', taskList)

// Add task to the beginning using unshift()
taskList.unshift('Do homework')
console.log('After unshift:', taskList)

// Remove first task using shift()
const firstTask = taskList.shift()
console.log('Removed (shift):', firstTask)
console.log('List now:', taskList)
