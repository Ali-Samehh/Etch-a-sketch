const gridArea = 600;
const squarePerSide = 16;
let color = 'navy';


document.addEventListener("DOMContentLoaded", () => {
    const sketchArea = document.querySelector('.sketch');
    sketchArea.style.width = sketchArea.style.height = `${gridArea}px`;

    function createGridCell (squarePerSide) {
        for (let i = 1; i <= squarePerSide * squarePerSide; i++) {
            const gridCell = document.createElement('div');
            gridCell.style.width = gridCell.style.height = `${(gridArea / squarePerSide) - 2}px`;
            gridCell.classList.add('cell');
            sketchArea.appendChild(gridCell);
            gridCell.addEventListener('mouseover' , setColorDiv );
        }
    }

    createGridCell(squarePerSide);

    function removeGridCell () {
        const gridCells = document.querySelectorAll('.cell');
        gridCells.forEach(cell => {
            cell.remove();
        });
    }

    const sizeBtn = document.querySelector('.size');


    function createUserGrid () {
        let userInput = prompt('Enter the number of squares per side (1-100):');
        if (userInput > 100 || userInput < 1) {
            alert('Please enter a number between 1 and 100');
            createUserGrid();
        }
        else {
            removeGridCell();
            createGridCell(userInput);
        }
    }

    sizeBtn.addEventListener('click', createUserGrid);

    const clearBtn = document.querySelector('.clear');

    clearBtn.addEventListener('click', clearGrid);

    function clearGrid () {

        let divs = document.querySelectorAll('.cell');
        divs.forEach (div => div.style.backgroundColor = 'white');
    }

    function setColorDiv () {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }

    function setColor (colorChoice) {
        color = colorChoice;    
    }

    const randomBtn = document.querySelector('.random');
    randomBtn.addEventListener('click', () => setColor("random"));

});