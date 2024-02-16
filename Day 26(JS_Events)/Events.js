let button = document.getElementById("btn")
// JS have different type of event listener mouse, keyboard, form
button.addEventListener("click", ()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your clicked"
})

// keyboard event listener
document.addEventListener("keydown", (e)=>{
    alert("Hello")
})