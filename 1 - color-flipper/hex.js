const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

function getHexNumber(){
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

btn.addEventListener('click',()=>{
    var randomHexNumber = getHexNumber();
    
    document.body.style.backgroundColor = randomHexNumber;
    
    color.textContent = randomHexNumber;
})