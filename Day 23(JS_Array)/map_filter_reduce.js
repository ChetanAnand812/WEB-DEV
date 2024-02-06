// map - create a new array by performing some operations on each array element
let arr = [1,2,3,4,5];

/*
let newArr = []
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element**2)
}
*/

console.log(arr)

let newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr)

console.log("-------------------------------------------")

// filter - filters an array with values that passes a test creates a new array
const greaterThan = (e)=>{
    if(e>3){
        return true
    }
    return false
}
console.log(arr.filter(greaterThan))

console.log("-------------------------------------------")

// reduce -- reduce an array to single value
let arr2 = [1,2,3,4,5,6]
const red = (a, b)=>{
    return a+b
}
console.log(arr2.reduce(red))

console.log("-------------------------------------------")

// Array from is used to convert object to array
console.log(Array.from("Chetan"))