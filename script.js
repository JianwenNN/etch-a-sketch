const setup = document.getElementById('setup');
setup.addEventListener('click', setGrid);
let items;

function removeAllChild(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function setGrid() {
    let num = +prompt('Enter a number:', 16);
    const container = document.getElementById('container');
    container.classList.add('container');
    removeAllChild(container);
    let containerWidth = container.clientWidth;
    for (let i = 0; i < num*num; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.classList.add('p0');
        grid.style.width = `${containerWidth/num}px`;
        container.appendChild(grid);
    }
    items = document.querySelectorAll('.grid');
    items.forEach(item => item.addEventListener('mouseover', countPass))
    items.forEach(item => item.addEventListener('mouseover', draw));
    
}

let IDs = ['grid p0', 'grid p1', 'grid p2', 'grid p3', 'grid p4', 'grid p5', 'grid p6', 'grid p7', 'grid p8', 'grid p9', 'grid p10'];

function countPass(e) {
    let i = IDs.indexOf(e.target.className) + 1;
    e.target.className = i > 10 ? IDs[10] : IDs[i];
}
//function for drawing
function draw(e) {
    e.target.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
}

function rand() {
    return Math.floor(Math.random()*256);
}
