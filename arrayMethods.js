// Custom filter method

function filter(arr, callBack) {
  let z = []
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      z.push(arr[i] )
    }
  }
  return z
}

function checkEven(x) {
  return (x%2 === 0 )
}
function lessThanThree(x) {
  return (x < 3)
}


// filter([1, 2, 3, 4, 5, 6], oddEven)
filter([1, 2, 3, 4, 5, 6], lessThanThree)
// ---------------------------------------------------------------

// Custom map method

function map(arr, callBack) {
  if (!Array.isArray(arr)) {
    return console.log("array de na be")
  }
  if (typeof callBack !== "function") {
    return console.log("bhai function de de") 
  }
  console.log("leleleee")
  let z = [] 
  for (let i = 0; i < arr.length; i++) {
    z.push(callBack(arr[i]))
  }
  return z
}

function multiplyByTwo(x) {
  return x * 2
}

function multiplyByThree(x) {
  return x * 3
}

map([1, 2, 3, 4, 5, 6, 7], multiplyByTwo)
map([1, 2, 3, 4, 5, 6, 7], multiplyByThree)
map([], multiplyByTwo)
// --------------------------------------------------------

// Custome some method

function some(arr, callBack) {
  let z = []
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      z.push(arr[i])
    }
  }
  return z
}
function greaterThanFive(x) {
  if (x > 5) {
    return true
  } else {return false}
}
some([1, 2, 3, 4, 5, 6, 7], greaterThanFive)
// -------------------------------------------------------------

Custom find method

function find(arr, callBack) {
for (let i = 0; i < arr.length; i++) {
  if (callBack(arr[i])) {
    return arr[i]
  }
}
}
function checkArrayHasFive(x) {
  return x === 5
}
find([1, 2, 3, 4, 5, 6, 7], checkArrayHasFive)
// --------------------------------------------------------------------

// Custom includes method
function includes(arr, callBack) {
for (let i = 0; i < arr.length; i++) {
  if (callBack(arr[i])) {
    return true
  }
}
}
function(x) {
  return x === 5
}
includes([1, 2, 3, 4, 5, 6, 7], checkFivePresent)
// --------------------------------------------------------------

// Custom every method
function every(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i] < 1)) {
      return false
    } else {return true}
  }
}
function(x) {
  return x >= 1
}
every([1, 2, 3, 4, 5, 6, 7], checkGreaterThanOne)
// --------------------------------------------------------------------

// Custome indexOf method
function indexOf(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i]) === 2) {
      return i
    }
  }

}
function(x) {
  return x
}
indexOf([1, 2, 3, 4, 5, 6, 7], indexOfOne)
// -----------------------------------------------------------------------
