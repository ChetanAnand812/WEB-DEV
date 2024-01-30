console.log("Loops Tutorial")

/* 
Types of loops
1. for loop
2. for in loop
3. for of loop
4. while loop
5. do-while loop
*/

// for loop
let a = 1;
for (let i = 0; i < 10; i++) {
    console.log(a + i);   
}

console.log("--------------------------------");

// for in loop -- used for object
let obj = {
    Name:"Chetan",
    Role: "Student",
    College: "Amrita"
}

for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
}

console.log("--------------------------------");

// for of loop -- used in array
for (const c of "Chetan") {
    console.log(c)
}

console.log("--------------------------------");

// while loop
let i = 0;
while(i < 6){
    console.log(i);
    i++;
}

console.log("--------------------------------");

// do-while
let j = 10;
do {
    console.log(j);
    j++;
} while (j<6);
