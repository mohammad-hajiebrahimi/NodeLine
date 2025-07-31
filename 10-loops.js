// تعریف آرایه‌ای از اعداد
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// while loop – 
let indexWhile = 0
let sumWhile = 0

while (indexWhile < arrayOfNumbers.length) {
  if (arrayOfNumbers[indexWhile] % 2 === 0) {
    sumWhile += arrayOfNumbers[indexWhile]
  }
  indexWhile++
}
console.log('sumWithWhile:', sumWhile)

// do while loop – 
let indexDoWhile = 0
let sumDoWhile = 0

do {
  if (arrayOfNumbers[indexDoWhile] % 2 === 0) {
    sumDoWhile += arrayOfNumbers[indexDoWhile]
  }
  indexDoWhile++
} while (indexDoWhile < arrayOfNumbers.length)

console.log('sumWithDoWhile:', sumDoWhile)

// for loop –
let sumFor = 0
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 === 0) {
    sumFor += arrayOfNumbers[i]
  }
}
console.log('sumWithFor:', sumFor)

for (const adad of arrayOfNumbers){
  if (adad % 2 === 0) {
    sumFor += adad[i]
  }
}