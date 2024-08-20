const container = document.querySelector('.grid-container');
const newGridBtn = document.querySelector('.new-grid-btn');

newGridBtn.addEventListener('click', newGridBtnClicked);

function newGridBtnClicked() {
    const newSize = parseInt(prompt('Please enter a valid grid size'));
    if (newSize !== NaN && (newSize > 0 && newSize <= 100)) {
        return createGrid(newSize);
    } else {
        alert('Enter a valid input from 1-100');
    }
}
function createGrid(size) {
    container.innerHTML = '';
    const itemSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;
        container.appendChild(gridItem);

        gridItem.addEventListener('mouseover', function(e) {
            const randomColor = generateRandomColor();
            this.style.backgroundColor = randomColor;
        });

        gridItem.addEventListener('mouseout', function(e) {
            this.style.backgroundColor = '';
        })
    }
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

createGrid(16);