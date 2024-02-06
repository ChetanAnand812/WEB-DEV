let a = [1, 93, 5, 6, 88]

for (let i = 0; i < a.length; i++) { 
    console.log(a[i])
}

console.log("-------------------------------------------")

// foreach loop -- calls a fuction once for each array element
a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

console.log("-------------------------------------------")

// forin loop
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const i in obj) {
    if (Object.hasOwnProperty.call(obj, i)) {
        const element = obj[i];
        console.log(element)
        
    }
}

console.log("-------------------------------------------")

// for of loop
for (const value of a) {
    console.log(value)
}


