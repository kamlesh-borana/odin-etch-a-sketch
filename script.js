const gridContainer = document.querySelector(".grid-container");
const newGridBtn = document.querySelector(".create-new-grid button");

function getRandomNumber(end, start = 0) {
    const randomNumber = Math.floor(Math.random() * end) + start;
    
    return randomNumber;
}

function attachEventListener(element) {
    element.addEventListener("mouseenter", () => {
        element.classList.add("hovered");
        element.style.backgroundColor = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
    });
}

function createGrid(row, column = row) {
    for (let i = 1; i <= row; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        
        for (let j = 1; j <= column; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            attachEventListener(gridItem);
            gridRow.appendChild(gridItem);
        }

        gridContainer.appendChild(gridRow);
    }
}

newGridBtn.addEventListener("click", () => {
    const gridSize = Number(prompt("Enter size for the new grid"));
    
    if(gridSize > 0 && gridSize <= 100) {
        gridContainer.textContent = "";
        createGrid(gridSize);
    }
});

createGrid(16);