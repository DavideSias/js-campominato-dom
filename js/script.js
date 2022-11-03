const elePlay = document.querySelector('.btn-play');

elePlay.addEventListener('click', function(){

    const eleGrid = document.querySelector('.grid');
    eleGrid.replaceChildren();  
    // eleGrid.innerHTML = '' alternativa per svuotare il contenuto
    const eleDifficulty = document.querySelector('#difficulty');
    let nCells = parseInt(eleDifficulty.value);
    console.log(nCells);
    const arrRandomNumbers = [];

    for(let i = 0; i < 16; i++){
        let numberRandom;
        do {
            numberRandom = getRandomInteger(1, nCells);
        } while (arrRandomNumbers.includes(numberRandom));
        arrRandomNumbers.push(numberRandom);
    }
    console.log(arrRandomNumbers);
    
    for (let i = 1; i <= nCells; i++) {
        eleCell = document.createElement('div');
        eleCell.classList.add('cell');
        
        if (arrRandomNumbers.includes(i)){
            eleCell.classList.add('bomb');
        } 

        eleGrid.append(eleCell);
        eleCell.innerHTML = i; 

        eleCell.addEventListener('click', function() {
            this.classList.add('active');
            console.log([i]);
        });

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

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

