const elePlay = document.querySelector('.btn-play');

elePlay.addEventListener('click', function(){

    const eleGrid = document.querySelector('.grid');
    eleGrid.replaceChildren();  
    // eleGrid.innerHTML = '' alternativa per svuotare il contenuto
    const eleDifficulty = document.querySelector('#difficulty').value;

    
    if (eleDifficulty === 'easy'){
        for (let i = 1; i <= 100; i++) {
            eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleGrid.append(eleCell);
            eleCell.innerHTML = i; 
            eleCell.style.width = `calc(100% / 10)`;
            eleCell.style.style = `calc(100% / 10)`;  
            
            eleCell.addEventListener('click', function() {
                this.classList.toggle('active');
                console.log([i]);
            });                
        }    
    } else if (eleDifficulty === 'medium'){
        for (let i = 1; i <= 81; i++) {
        
            eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleGrid.append(eleCell);
            eleCell.innerHTML = i;
            eleCell.style.width = `calc(100% / 9)`;
            eleCell.style.style = `calc(100% / 9)`; 
        
            eleCell.addEventListener('click', function() {
                this.classList.toggle('active');
                console.log([i]);
            });                
        }
    } else if (eleDifficulty === 'hard'){
        for (let i = 1; i <= 49; i++) {
          
            eleCell = document.createElement('div');
            eleCell.classList.add('cell');
            eleGrid.append(eleCell);
            eleCell.innerHTML = i;
            eleCell.style.width = `calc(100% / 7)`;
            eleCell.style.style = `calc(100% / 7)`; 
        
            eleCell.addEventListener('click', function() {
                this.classList.toggle('active');
                console.log([i]);
            });                
        }
    }
})