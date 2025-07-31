const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// concat: combines two arrays and returns a new array
const combined = arr1.concat(arr2)
console.log('concat:', combined)  // [1, 2, 3, 4, 5, 6]

// slice: extracts a portion of the array (does not modify original)
// slice(startIndex, endIndex) - endIndex is not included
const part = combined.slice(2, 5)
console.log('slice:', part)        // [3, 4, 5]
console.log('original:', combined) // original array remains unchanged

// splice: removes and/or adds elements to the original array
// splice(startIndex, deleteCount, item1, item2, ...)
const spliced = combined.splice(2, 2, 99, 100)
console.log('splice removed:', spliced) // [3, 4] — removed elements
console.log('after splice:', combined)  // [1, 2, 99, 100, 5, 6]
