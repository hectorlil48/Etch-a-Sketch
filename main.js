let color = "black";
let click = false;

createBoard(16);

document.querySelector("body").addEventListener("click", function (e) {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    let draw = document.querySelector("#draw");
    if (click) {
      draw.innerHTML = "Now You Can Draw";
    } else {
      draw.innerHTML = "You're Not Allowed to Draw";
    }
  }
});

let btn_popup = document.querySelector("#popup");
btn_popup.addEventListener("click", function () {
  let size = getSize();
  createBoard(size);
});

function createBoard(size) {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("What will be the size of the board?");
  let message = document.querySelector("#message");
  if (input === "") {
    message.innerHTML = "Please provide a number";
  } else if (input < 2 || input > 100) {
    message.innerHTML = "Provide a number between 2 and 100";
  } else {
    message.innerHTML = "Now we play!";
    return input;
  }
}

function colorDiv() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color === "erase") {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
