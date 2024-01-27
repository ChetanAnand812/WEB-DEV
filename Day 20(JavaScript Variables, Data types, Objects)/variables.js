console.log("Hello")

var a = 10;
a = a + 1;
var b = 20;
var c = "Chetan";
var _c = "chetan"

console.log(a + b + 5)

console.log(_c)

console.log(typeof a, typeof b, typeof c)

/*                  var vs let in js 
1. var is globally scoped while let & const are block scoped
2. var can be updated & re-declared within its scope
3. let can be upadeted but not re-declared
4. const can neither be updated nor be re-declared             
5. var variables are initialized with undefined whereas letand const variables are not initialized  
6. Const must be initialized during declaration unlike let and var              */

/*  const a1 = 6;
    a1 = a1 + 1;    Not allowed */

let d = 5;
d = d + 1;
console.log(d)

{
    let a = 100;
    console.log(a)
}
