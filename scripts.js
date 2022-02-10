document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement(`button`);
  let buttonTxt = document.createTextNode(`Add Square`);
  button.appendChild(buttonTxt);
  document.body.appendChild(button);

  button.addEventListener(`click`, function () {
    square();
  });

  function square() {
    let squareContainer = document.createElement(`div`);
    squareContainer.classList.add(`squareContainer`);
    let square = document.createElement(`div`);
    square.classList.add(`square`);

    square.style.backgroundColor = rainbow();
    squareContainer.appendChild(square);
    document.body.appendChild(squareContainer);

    //Scope is important here - you cant add teh eventlistner until the element is in the DOM
    square.addEventListener(`click`, function () {
      square.style.backgroundColor = rainbow();
    });
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
  function squareEngine() {}
}); //End of DOMContentLoaded
