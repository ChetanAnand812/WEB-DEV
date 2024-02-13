console.log("Hello")

/*
let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"
*/

/* id
document.getElementById("bluebox").style.backgroundColor = "blue"
*/

// querySelector
// document.querySelector(".box").style.backgroundColor ="green"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})