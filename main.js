const body = document.querySelector("body");
const count = document.querySelector(".counter");
const incrementBtn = document.querySelector(".incrementBtn");
const decrementBtn = document.querySelector(".decrementBtn");
const resetBtn = document.querySelector(".resetBtn");
const displayPosition = document.querySelector(".displayPosition");
let incrementCount = localStorage.getItem("value")
let btnDisabled = false

//increment the value here
incrementBtn.addEventListener("click", ()=>{
    incrementCount++
    decrementBtn.disabled = btnDisabled
    showColor()
})
//decrement the value here
decrementBtn.addEventListener("click", ()=>{
    if(incrementCount <= 0){
        decrementBtn.disabled = !btnDisabled
        return;
    }
    incrementCount--
    showColor()
})
function showColor(){
    saveIntoLocalStorage()
    counting()
    creatingColor()
}

// store value into localstorage
function saveIntoLocalStorage(){
    localStorage.setItem("value", incrementCount)
}

function counting(){
    addColor(incrementCount)
    count.innerText = incrementCount
}
counting()

// reset the value here
resetBtn.addEventListener("click", ()=>{
    incrementCount = 0
    count.innerText = 0
    count.classList.add("low")
    count.classList.remove("medium")
    count.classList.remove("heigh")
    body.style.backgroundColor = "white"
    displayPosition.textContent = ""
    localStorage.setItem("value", 0)
})

function addColor(color){
    if(color < 10){
        count.classList.add("low")
        count.classList.remove("medium")
        if(color > 0){
            displayPosition.textContent = "You are in Low position"
        }
    }else if(color < 50){
        count.classList.add("medium")
        count.classList.remove("heigh")
        displayPosition.textContent = "You are in Medium position"
    }else{
        count.classList.add("heigh")
        displayPosition.textContent = "You are in High position"
    }
}

// genarate random number up to 255
function changeBackgroundColor(){
    return Math.floor(Math.random() * 256)
}
changeBackgroundColor()

// creating rgb color
function creatingColor(){
    const red = changeBackgroundColor()
    const green = changeBackgroundColor()
    const blue = changeBackgroundColor()
    const rgbColor = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = rgbColor
}


