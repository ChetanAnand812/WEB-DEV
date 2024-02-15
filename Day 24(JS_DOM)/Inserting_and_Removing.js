// document.querySelector(".container").innerText

// document.querySelector(".container").outer

// document.querySelector(".container").outerHTML

// document.querySelector(".container").tagName // only applicable for element

// document.querySelector(".container").nodeName // applicable for all eg comment node, text node

// document.querySelector(".container").hidden = true  // hide container 

// // change the text
// document.querySelector(".box").innerHTML = "Hey i am chetan"

// // check for attribute present or not
// document.querySelector(".box").hasAttribute("style")

// // check which one is present
// document.querySelector(".box").getAttribute("style")

// // set the attribute
// document.querySelector(".box").setAttribute("style", "display: inline")

// document.querySelector(".box").attributes

// // remove attributes
// // document.querySelector(".box").removeAttribute("style")


// Inserting Method
// let div = document.createElement("div")
// div.innerHTML = "I have been inserted by <b> Chetan </b>"
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div) //prepend, before, after, replacewit these are different type of inserting functions
let cont = document.querySelector(".container") 
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please hepl me here too mauch raining....</b>")


// class list
document.querySelector(".container").classList
// class name
document.querySelector(".container").className

// add and remove from class
document.querySelector(".container").classList.add("Chetan")
document.querySelector(".container").classList.remove("Chetan")

// Toggle in class- hai too remove ho jayega, nahi hai too add ho jayega class
document.querySelector(".container").classList.toggle("Anand")

