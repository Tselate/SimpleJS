//Add buttons
let addPear = document.getElementById("addPear")
let addApple = document.getElementById("addApple")
let addBanana = document.getElementById("addBanana")

//Subtract buttons 
let subPear = document.getElementById("subtractPear")
let subApple = document.getElementById("subtractApple")
let subBanana = document.getElementById("subtractBanana")

//Number of firuts 
let numPears = document.getElementById("num-pears")
let numApples = document.getElementById("num-apples")
let numBanana = document.getElementById("num-bananas")

let count = 0

//Add functions 
addPear.addEventListener("click", function increasePear (){
    count += 1
    if (count === 1) {
        numPears.innerHTML= count + " Pear"
    } else {
        numPears.innerHTML= count + " Pears"
    } 
})

addApple.addEventListener("click", function increaseApple (){
    count += 1
    if (count === 1) {
        numApples.innerHTML= count + " Apple"
    } else {
        numApples.innerHTML= count + " Apples"
    } 
})

addBanana.addEventListener("click", function increaseBanana (){
    count += 1
    if (count === 1) {
        numBanana.innerHTML= count + " Banana"
    } else {
        numBanana.innerHTML= count + " Bananas"
    } 
})