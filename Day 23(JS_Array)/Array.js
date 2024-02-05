let arr = [1,2,3,4,5] // Array is mutable(we can change the value of array)

console.log(arr);
console.log(arr.length)

arr[0] = 10;
console.log(arr);

// In javascript arrays are object
console.log(typeof arr)

console.log(arr.toString())

console.log(arr.join(" and "))

let a = [6,7,8,9,11]
a.pop()             // remove last element
console.log(a)

a.push(1000)        // add element in last
console.log(a)

a.push('Chetan')
console.log(a)

a.shift()        // remove first element
console.log(a)

a.unshift('Anand')   // add element in first
console.log(a)

console.log("Length: " + a.length)
delete a[5]
console.log(a)

console.log("Length: " + a.length)

console.log(a.sort())    // sort

console.log(a.splice(1, 3)) // splice
console.log(a)



// concat
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
console.log(a1.concat(a2,a3))
