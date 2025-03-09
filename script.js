let rows = 16;
let cols = 16;

const container = document.getElementById('container');

const colorCell = e => {
    const rColor = Math.floor(Math.random() * 256);
    const gColor = Math.floor(Math.random() * 256);
    const bColor = Math.floor(Math.random() * 256);

    const colorString = 'rgb(' + rColor + ', '+ gColor + ', ' + bColor + ')';

    e.target.style.backgroundColor = colorString;
    //if (e.target.style.backgroundColor === '#fff') {
    //    e.target.style.backgroundColor = '#000';
    //}
}

const buildCanvas = (rows, cols) => {
    console.log(rows, cols);
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
            cell.addEventListener('mouseenter', colorCell);
        }
        container.appendChild(row);
    }
}

buildCanvas(rows, cols);

const cellsButton = document.getElementById('canvas-builder');

cellsButton.addEventListener('click', () => {
    container.textContent = '';

    let canvasSize;
    do{
        canvasSize = prompt('Enter a number between 1 and 100');
        console.log(canvasSize);
    } while (canvasSize < 1 || canvasSize > 100);

    buildCanvas(canvasSize, canvasSize);
})