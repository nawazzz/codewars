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
// function remove(s){
//   let z = ''
// for (let i = 0; i < s.length; i++) {
//   console.log(s[i])
//   if (s[i] === "!") {
//     z = s.slice(s[i])
//   }
// }
// return z
// }
// remove("Hi!!")
// ........................................................

// Fizz Buzz problem
// function fizzbuzz(n) {
//   let z = []
//   for (let i = 1; i <= n; i++) {
//     z.push(i)
//   }
//   console.log(z)
//   let x = z.map((elm, index) => {
//     if ((elm % 3 === 0)  && (elm % 5 === 0)) {
//       return "FizzBuzz"
//     } else if ((elm % 3 === 0)) {
//       return "Fizz"
//     } else if(elm % 5 === 0) {
//       return "Buzz"
//     }  else {
//       return elm
//     }
//   })
//   return x
// }
// fizzbuzz(30)
// .............................................................
// // Change two-dimensional array
// function matrix(array) {
//   return array.map((item, index) => {
//     // debugger
//     return item.map((elm, ind) => {
//       if (index === ind) {
//         if (elm < 0) {
//           return 0
//         }

//         if (elm >= 0) {
//           return 1
//         }
//       }
//       return elm
//     })
//   })
// }
// matrix([
//   [ -1, 4, -5, -9, 3, 8 ],
//   [ 6, 8, -7, 4, -5, -1 ],
//   [ 3, 5, 1, -9, -1, 6 ],
//   [ 1, 5, -7, 15, -9, 3 ],
//   [ -3, 2, 1, -5, -6, 0 ],
//   [ 8, 2, 0, -2, 4, -5 ]
// ])
// ................................................................
// No odd values here
// function noOdds( values ){
//   let z= values.filter((elm, index) => {
//     if (elm % 2 === 0) {
//       return true
//     }
//   })
//   return z
// }
// noOdds( [0,1,2,3])
// .......................................


// Odd or Even test

// function oddOrEven(array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i]
//   }
//   if (sum % 2 === 0) {
//     return "even"
//   } else if (sum % 2 !== 0) {
//     return "odd"
//   }
// }
// ...........................................
// Make uppercase
// function makeUpperCase(str) {
//   return str.toUpperCase()
// }
// .................................................
// Return string (Fundamental 8kyu for practice)
// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }
// greet("Ryan")
// ..........................................
// Return sum of string (Fundamental 8kyu for practice)
// function sumStr(a,b) {
//   return String(Number(a) + Number(b))
// }
// sumStr("34","5")
// .........................................
// Remove first and last character from string
// function removeChar(str){
//   return str.slice(1, (str.length - 1))
 
//  };
// ..........................................
// function powersOfTwo(n){
//   let z = []
//   for (let i = 0; i <= n; i++) {
//     z.push(Math.pow(2, i))
//   }
//   return z
// }
// powersOfTwo(0)
// ...............................................
// Remove exclamation marks from given string:
// function removeExclamationMarks(s) {
//   let z = ""
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "!") {
//       z += s[i]
//     }
//   }
//   return z
// }
// removeExclamationMarks("hello world!!!")
// .................................................
// change traffic lights
// function updateLight(current) {
//   if (current === "green") {return "yellow"}
//   if (current === "yellow") {return "red"}
//   if (current === "red") {return "green"}
// }
// updateLight("green")
// ...........................
// string repeat
// function repeatStr (n, s) {
//   let res = ''
//   for (let i = 0; i < n; i++) {
//     res += s
//   }
//   return res
// }
// repeatStr(2, "ha ")
//................................
// Find english word in string
// function spEng(sentence){
//   console.log(sentence)
//   if (sentence.toLowerCase().includes("english")) {
//     return true
//   } else {
//     return false
//   }
// }
// spEng("english")
// ......................................
// sort array
// const reverseSeq = n => {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i)
//   }
//   return z.sort(function(a,b) {
//     return b-a
//   })
// };
// reverseSeq(5)
// .........................................