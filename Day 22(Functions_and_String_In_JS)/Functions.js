function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " you are sweet!")
    console.log("Hey " + name + " your tshirt is nice!")
}

nice("Chetan")
nice("Rishu")

console.log("--------------------------------------")

function sum(a, b) {
    // console.log(a + b)
    return a + b
}
result1 = sum(3, 4)
result2 = sum(9, 4)
result3 = sum(3, 1)
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

console.log("--------------------------------------")

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}
func1(34)
func1(35)
func1(38)