const grid = document.querySelector('.grid');
const userInput = document.querySelector('input');
const goBtn = document.querySelector('.go-btn');
const resetBtn = document.querySelector('.reset-btn');

goBtn.addEventListener('click', createGrid);
resetBtn.addEventListener('click', resetGrid);

function createGrid() {
    const gridNumber = +userInput.value;
    if (gridNumber > 200) {
        userInput.value = '';
        alert('Number too high');
        return false;
    }
    userInput.value = '';
    for (let x = 0; x < gridNumber; x++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'newDiv';
        for (let y = 0; y < gridNumber; y++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.addEventListener('mouseover', (e) => {
                square.style.backgroundColor = 'black';
            })
            newDiv.appendChild(square);
        }
        grid.appendChild(newDiv);
    }
}

function resetGrid() {
    grid.innerHTML = '';
}
