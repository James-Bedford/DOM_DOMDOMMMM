document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement(`button`);
  let buttonTxt = document.createTextNode(`Add Square`);
  button.appendChild(buttonTxt);
  document.body.appendChild(button);
  let j = 1;
  button.addEventListener(`click`, function () {
    square(j);
    j++;
  });

  function square(j) {
    let squareContainer = document.createElement(`div`);
    squareContainer.classList.add(`squareContainer`);
    let square = document.createElement(`div`);
    square.classList.add(`square`);

    square.style.backgroundColor = rainbow();
    squareContainer.appendChild(square);
    document.body.appendChild(squareContainer);
    //Scope is import - below here elemnt must exist first in the DOM
    square.setAttribute(`id`, `sq-${j}`);
    square.addEventListener(`click`, function () {
      square.style.backgroundColor = rainbow();
    });
    for (let i = 0; i < 10; i++) {
      //setInterval((square.style.left = i + `px`), 5000);
      //setInterval(squareEngine(square), 1000);
    }
  }
  //Random RGB color generator function
  function rainbow() {
    let min = 0;
    let max = 255;
    let colorRGB1 = Math.floor(Math.random() * (max - min) + min);
    let colorRGB2 = Math.floor(Math.random() * (max - min) + min);
    let colorRGB3 = Math.floor(Math.random() * (max - min) + min);
    let output =
      "rgb" + `(` + colorRGB1 + `,` + colorRGB2 + `,` + colorRGB3 + `)`;
    return output;
  }

  //Function to give movment to the squares
  function squareEngine(square) {
    let left = 0;

    for (let i = 0; i < 900; i++) {
      left++;
      console.log(left);
      return (square.style.left = left + "px");
    }
  }

  function disp() {
    var step = 1; // Change this step value
    //alert("Hello");
    var y = document.getElementById("i1").offsetTop;
    var x = document.getElementById("i1").offsetLeft;
    document.getElementById("msg").innerHTML = "X: " + x + " Y : " + y;
    if (y < 400) {
      y = y + step;
      document.getElementById("i1").style.top = y + "px"; // vertical movment
    } else {
      if (x < 800) {
        x = x + step;
        document.getElementById("i1").style.left = x + "px"; //horizontal move
      }
    }
  }
}); //End of DOMContentLoaded
