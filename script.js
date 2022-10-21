const cards = ['URL("Images/bobrossparrot.gif")','URL("Images/explodyparrot.gif")','URL("Images/fiestaparrot.gif")',
'URL("Images/metalparrot.gif")','URL("Images/revertitparrot.gif")','URL("Images/tripletsparrot.gif")','URL("Images/unicornparrot.gif")'];



console.log(cards)

const numeroCards = Number(prompt('Qual o número de cartas?("Coloque um número par entre 4 e 14")'));

const principal = document.querySelector(".main")

function cardCreate() {
    for(let i=0;i < (numeroCards/2); i++){
        principal.innerHTML += `
        <div class="card">
            <div class="face front"></div>
            <div class="face back"></div>
        </div>`
    }
    for(let i=0;i < (numeroCards/2); i++){
        const back = document.querySelectorAll(".back");
        back[i].style.backgroundImage = cards[i];
    }
}

cardCreate();


