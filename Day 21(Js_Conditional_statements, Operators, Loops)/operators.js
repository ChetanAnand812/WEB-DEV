let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a % b);

// and many more operators are present same as c++

console.log("-------------------------------")
a = 6;
b = 8;
let c = a > b ? (a-b) : (b-a);
console.log(c)
/*
translates to:
if(a>b) {
    let c = a-b;
}
else{
    let c = b-a;
}
*/ 