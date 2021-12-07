const colors = ["green", "red", "blue", "white", "pink", "yellow"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click',()=>{
    var randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    
    color.textContent = colors[randomNumber];
})

