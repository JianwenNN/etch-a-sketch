let num = 32;
let containerWidth = 5*num;
const container = document.getElementById('container');

container.style.width = `${containerWidth}px`

for (let i = 0; i < num*num; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}

