let a = prompt("Enter first number")

let b = prompt("Enter second number")

// throw error
if(isNaN(a) || isNaN(b)){
    throw SyntaxError ("Sorry this not allowed")
}

let sum = parseInt(a) + parseInt(b)

// error handling
try {
    console.log("The sum is ", sum*x)
} catch (error) {
    console.log("Error aa gaya")
}

// alert(`The sum is ${sum}`)
// console.log("The sum is ", sum)

// finally function ke andar hota hai agar return statement ke badd print hota hai