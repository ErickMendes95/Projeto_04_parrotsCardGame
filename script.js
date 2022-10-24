const images = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];

let cardNumber = Number(
  prompt("Qual o número de cartas? Digite um número par entre 4 e 14")
);

while (!(cardNumber >= 4 && cardNumber <= 14 && cardNumber % 2 == 0)) {
  alert("Número Inválido, digite novamente");
  cardNumber = Number(
    prompt("Qual o número de cartas? Digite um número par entre 4 e 14")
  );
}

let timer = document.querySelector(".timer");

let seconds = 0,
  minutes = 0;

function timeCounter() {
  seconds++;
  if (seconds > 60) {
    minutes++;
    seconds = 0;
  }

  timer.innerHTML = `${minutes}:${seconds}`;
}

let principal = document.querySelector(".main");
let cardArray = [];
let moves = 0;

let firstCard = '';
let secondCard = '';

let timingDevice = setInterval(timeCounter, 1000)   

function endGame(){
    const cardDisable = document.querySelectorAll('.disabled')
    if(cardDisable.length === cardNumber){
        alert(`Você ganhou em ${moves} jogadas! e no tempo de ${minutes}minutos e ${seconds}segundos`)
        clearInterval(timingDevice)
    }
    
}


const cardCheck = function check() {
    const firstCheck = firstCard.getAttribute('name');
    const secondCheck = secondCard.getAttribute('name');

    if (firstCheck === secondCheck){

        firstCard.lastChild.classList.add("disabled")
        secondCard.lastChild.classList.add("disabled")

        firstCard = '';
        secondCard = '';
        moves += 2;

        setTimeout(endGame, 500)

    } else {
    setTimeout(() => {
        firstCard.classList.remove("cardReveal")
        secondCard.classList.remove("cardReveal")

        firstCard = '';
        secondCard = '';
        moves += 2;
    }, 1000)
}
}



const cardReveal = function flipcard({target}){

    if(target.parentNode.className.includes("cardReveal")){
        return;
    }

    
    if(firstCard === ''){
        target.parentNode.classList.add("cardReveal")
        firstCard = target.parentNode
    } else if(secondCard === ''){
        target.parentNode.classList.add("cardReveal")
        secondCard = target.parentNode
    }

    cardCheck()
}

function createCards() {
  for (let i = 0; i < cardNumber; i++) {
    let card = document.createElement("div");
    let front = document.createElement("div");
    let back = document.createElement("div");

    card.className = "card";
    front.className = "face front";
    back.className = "face back";

    card.addEventListener("click", cardReveal);

    card.appendChild(front);
    card.appendChild(back);
    cardArray.push(card);
  }

  for (i = 0; i < cardNumber / 2; i++) {
    cardArray[i].setAttribute("name",`${images[i]}`);
    cardArray[cardArray.length - i - 1].setAttribute("name",`${images[i]}`) 
  }
  for (i = 0; i < cardNumber; i++) {
    principal.appendChild(cardArray[i]);
}
  
}
createCards();



const divs = document.querySelectorAll(".back");

function addImage() {
  for (let i = 0; i < cardNumber / 2; i++) {
    divs[i].style.backgroundImage = `URL("./Images/${images[i]}.gif")`;
    divs[
      divs.length - i - 1
    ].style.backgroundImage = `URL("./Images/${images[i]}.gif")`;
  }
}

addImage();



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



