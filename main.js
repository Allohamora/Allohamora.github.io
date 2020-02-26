const buttonRows = document.querySelector(".buttons .button-rows");
const buttonSquares = document.querySelector(".buttons .button-squares");
const flexContainer = document.querySelector(".flex-container");

buttonRows.onclick = () => flexContainer.classList.add("column"); 
buttonSquares.onclick = () => flexContainer.classList.remove("column")