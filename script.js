let rows = 16;
let cols = 16;

const container = document.getElementById('container');


const buildCanvas = (rows, cols) => {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

buildCanvas(rows, cols);