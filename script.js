const gridContainer = document.querySelector(".grid-container");

function attachEventListener(element) {
    element.addEventListener("mouseenter", () => {
        element.classList.add("hovered");
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

createGrid(16);