const elePlay = document.querySelector('.btn-play');
const eleWelcome = document.querySelector('.welcome-title');
const eleGrid = document.querySelector('.grid');
const eleDifficulty = document.querySelector('#difficulty');
const endGame = document.querySelector('.score-point');
let arrRandomNumbers;
let score;
let maxScore;

elePlay.addEventListener('click', function(){
    endGame.innerHTML = '';
    let nCells = parseInt(eleDifficulty.value);
    score = 0;
    const nBomb = 16;
    maxScore = nCells - nBomb;
    eleGrid.replaceChildren();  
    // eleGrid.innerHTML = '' alternativa per svuotare il contenuto

    eleGrid.classList.remove('hidden');
	eleWelcome.classList.add('hidden');


    arrRandomNumbers = generateBomb(nBomb, 1, nCells);
    
    for (let i = 1; i <= nCells; i++) {
        eleCell = document.createElement('div');
        eleCell.classList.add('cell');

        eleGrid.append(eleCell);
        eleCell.innerHTML = i; 

        eleCell.addEventListener('click', play);

        switch (nCells) {
            case 100:
                eleCell.style.width = `calc(100% / 10)`;
                eleCell.style.style = `calc(100% / 10)`; 
                break;
            case 81:
                eleCell.style.width = `calc(100% / 9)`;
                eleCell.style.style = `calc(100% / 9)`; 
                break;
            case 49:
                eleCell.style.width = `calc(100% / 7)`;
                eleCell.style.style = `calc(100% / 7)`; 
                break;
        }
    }
});


function play() {
    if (arrRandomNumbers.includes(parseInt(this.innerHTML))) {
        this.classList.add('bomb');
        disableAllCells(true);
        endGame.innerHTML = `Hai perso! Il tuo punteggio è: ${score}`;
        console.log('Hai perso il punteggio è:' + score);
    } else{
        this.removeEventListener('click', play)
        score++;
        this.classList.add('free');
        if(score == maxScore){
        endGame.innerHTML = `Complimenti hai vinto! Il tuo punteggio è: ${score}`;
        console.log('Hai vinto! Il punteggio è:' + score);
        disableAllCells(false);
        }
    }
} 

function generateBomb(nBomb, min, max){
    const numberRandom = [];
    for(let i = 0; i < nBomb; i++){
        do {
            randomNumber = getRandomInteger(min, max);
        } while (numberRandom.includes(randomNumber))
        numberRandom.push(randomNumber);
    }
    console.log(numberRandom.sort(function(a, b){return a - b}));
    return numberRandom
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function disableAllCells (showBomb) {
     // togliere l'event listeners a tutte le bombe
    const listCells = eleGrid.querySelectorAll('.cell');
    for(let i = 0; i < listCells.length; i++) {
        // fare illuminare tutte le bombe
        if (showBomb && arrRandomNumbers.includes(parseInt(listCells[i].innerHTML))) {
            listCells[i].classList.add('bomb');
        }
        listCells[i].removeEventListener('click', play);
    }
}
