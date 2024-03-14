


const divCont = document.getElementById("div-cont")

divCont.innerHTML = "<button  onclick='buy()'>Buy!</button>"

function buy(){
    divCont.innerHTML +="<p>Thank you for buying</p>"
}

