function factorial(n) { 
    let res = 1; 
    for (let i = 2; i <= n; i++) {
        res *= i; 
    }     
    return res; 
} 
  

var num = 5; 
console.log("Factorial of " + num + " is " + factorial(5)); 

console.log("-------------------------")

// using reduce
let a = 6
function fact(number){
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1, ).reduce((a, b)=>{
        return a*b
    })
    console.log(c)
}
fact(a)