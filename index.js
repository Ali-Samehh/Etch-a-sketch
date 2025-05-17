let squarePerSide = 16 ;
let gridArea = 600 ;
let color = 'navy'

document.addEventListener('DOMContentLoaded', () => {
    const sketchArea = document.querySelector('.sketch');
    sketchArea.style.height = sketchArea.style.width = `${gridArea}px`;

    function createGrid(squarePerSide) {
        squareTotal = squarePerSide * squarePerSide;
        heightAndWidth = `${(gridArea / squarePerSide) - 2}`;
        for (let i = 1 ; i <= squareTotal ; i++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            gridCell.style.width =  gridCell.style.heigh = `${heightAndWidth}px`;
            sketchArea.appendChild(gridCell);
            gridCell.addEventListener('mouseover', setColorDiv);

        }
    }
    createGrid(squarePerSide);


    function createUserGrid () {
        let userInput = prompt ('Enter the number of squares per side (1-100):');
        if (userInput < 0 || userInput > 100) {
            alert('Please enter a number between 1 and 100');
            createUserGrid();
        }
        else {
            removeGrid();
            createGrid(userInput);
        }
    }

    sizeBtn = document.querySelector('.size');
    sizeBtn.addEventListener('click', createUserGrid)


    function removeGrid () {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.remove();
        });
    }

    const clearBtn = document.querySelector('.clear');

    function clearGrid () {
        const cells = document.querySelectorAll('.cell');
        cells.forEach (cell => {
            cell.style.backgroundColor = 'white';
        })
    }

    clearBtn.addEventListener('click', clearGrid);

    const randomBtn = document.querySelector('.random');


    function setColor (colorChoice) {
        color = colorChoice;
    }

    function setColorDiv () {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }

    randomBtn.addEventListener('click',() => setColor('random'))
});