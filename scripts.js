const grid = document.querySelector('.grid');
const userInput = document.querySelector('input');
const goBtn = document.querySelector('.go-btn');
const resetBtn = document.querySelector('.reset-btn');

goBtn.addEventListener('click', createGrid);

function createGrid() {
    const gridNumber = +userInput.value;
    userInput.value = '';
    for (let i = 1; i < gridNumber; i++) {
        const newDiv = document.createElement('div');
        for (let i = 1; i < gridNumber; i++) {
            const square = document.createElement('div');
            square.style.backgroundColor = '#F012BE';
            square.addEventListener('mouseover', (e) => {
                square.style.backgroundColor = 'black';
            })
            newDiv.append(square);
        }
        grid.append(newDiv);
    }
}
