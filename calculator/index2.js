let num1 =8
let num2 =2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function addition(){
let sum = num1 + num2
sumEl.textContent = "sum :" + sum

}

function subtraction(){
    let sub = num1 - num2
    sumEl.textContent = "sub :" + sub
    
}
function multiplication(){
    let mult = num1 * num2
    sumEl.textContent = "mult :" + mult
    
}
function division(){

    let div = num1 / num2
sumEl.textContent = "div" + div
}