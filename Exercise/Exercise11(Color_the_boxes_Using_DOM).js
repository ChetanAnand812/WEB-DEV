
// let boxes = document.getElementsByClassName("box")
// boxes[0].style.backgroundColor = "red"
// boxes[1].style.backgroundColor = "green"
// boxes[2].style.backgroundColor = "orange"
// boxes[3].style.backgroundColor = "blue"
// boxes[4].style.backgroundColor = "yellow"

// boxes[0].style.Color = "red"
// boxes[1].style.Color = "green"
// boxes[2].style.Color = "orange"
// boxes[3].style.Color = "blue"
// boxes[4].style.Color = "yellow"

let boxes = document.querySelector(".container").children

function getRandonColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
/* Array.from(boxes).forEach(e=> {
        e.style.backgroundColor = getRandonColor()
        e.style.Color = getRandonColor()
   })
*/

for(var i =0; i<boxes.length; i++){
    var box = boxes[i]
    box.style.backgroundColor = getRandonColor()
    box.style.color = getRandonColor()
}
