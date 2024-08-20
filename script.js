const container = document.querySelector('.grid-container');
// create divs for 16x16 grid under the  `container`
// same style applie to each div - hover effect - use event listeners
// create a diff class with the hover effect styles, and simply 'add' style to the div when hover effect is applied

function createGrid(size) {
    container.innerHTML = '';
    const itemSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;
        container.appendChild(gridItem);

        gridItem.addEventListener("mouseover", function(e) {
            this.classList.add('hovered');
        });

        gridItem.addEventListener("mouseout", function(e) {
            this.classList.remove('hovered');
        })
    }
}

createGrid(16);