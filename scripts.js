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
    squareContainer.appendChild(square);
    document.body.appendChild(squareContainer);
    //Scope is import - below here elemnt must exist first in the DOM
    square.setAttribute(`id`, `sq-${j}`);
    square.addEventListener(`click`, function () {
      square.style.backgroundColor = rainbow();
    });
    //disp();
    let i = 0;
    //stimer();

    while (i < 80) {
      //setInterval(disp(), 2000);

      let x = document.getElementById("sq-1").offsetLeft;
      if (x < 800) {
        x = x + 1;
        //setTimeout(console.log(`timer fired`), 10);
        // stimer();
        document.getElementById("sq-1").style.left = x + "px"; //horizontal )
        console.log(`After ${x}`);
      }
      i++;
    } // end While
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

  function stimer() {
    disp();
    my_time = setTimeout(stimer(), 1000);
  }

  function disp() {
    let step = 1; // Change this step value
    let y = document.getElementById("sq-1").offsetTop;
    console.log(y);
    let x = document.getElementById("sq-1").offsetLeft;
    console.log(x);
    //document.getElementById("msg").innerHTML = "X: " + x + " Y : " + y;

    if (x < 100) {
      x = x + step;
      document.getElementById("sq-1").style.left = x + "px"; //horizontal )
      console.log(`After ${x}`);
      /*
    if (y < 400) {
      y = y + step;
      document.getElementById("sq-1").style.top = y + "px"; // vertical movment
    } else {
      if (x < 800) {
        x = x + step;
        document.getElementById("sq-1").style.left = x + "px"; //horizontal move
      }*/
    }
  }
}); //End of DOMContentLoaded
