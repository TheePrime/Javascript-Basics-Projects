const contEl = document.querySelector(".container");

const careers= ["YouTuber","Web Developer","Freelancer","Instructor"]

let currentIndex = 0;
let characterIndex =0;
function changeText(){
    characterIndex++;
    contEl.innerHTML =`<h1>I am ${careers[currentIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[currentIndex].slice(0, characterIndex)}</h1>`;

    
    if (characterIndex === careers[currentIndex].length){
        currentIndex++;
        characterIndex=0;
    }

    if(currentIndex === careers.length){
        currentIndex = 0;
    }
    
    setTimeout(changeText, 400);
}

changeText();