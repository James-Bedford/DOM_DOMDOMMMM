/*Create a document.addEventLister function
within this create and attach a button to the DOM
add and addEventlister to the button
within this eventlister add  code to create a square to appear on the DOM.
*/

document.addEventListener("DOMContentLoaded", function () {
  let mainContainer = document.createElement(`div`);
  let buttonContainer = document.createElement(`div`);
  buttonContainer.classList.add(`buttonAddSqrs`);
  mainContainer.classList.add(`mainContainer`);

  let button = document.createElement(`button`);
  let buttonTxt = document.createTextNode(`Add Square`);
  button.appendChild(buttonTxt);
  buttonContainer.appendChild(button);
  document.body.appendChild(buttonContainer);
  document.body.appendChild(mainContainer);
  let j = 1;
  //Button creates squares
  button.addEventListener(`click`, function () {
    let square = document.createElement(`div`);
    square.classList.add(`square`);
    square.setAttribute(`id`, `${j}`);
    mainContainer.appendChild(square);
    j++;
    // Change square color
    square.addEventListener(`click`, function () {
      square.style.backgroundColor = rainbow();
    }); //sqaure eventlistener
    //On mouseover the id is made visible
    square.addEventListener(`mouseover`, function () {
      let a = square.getAttribute(`id`);
      square.textContent = a;
    });
    //Make id invisible
    square.addEventListener(`mouseout`, function () {
      square.textContent = "";
    });
    //dbl click to remove and Odd or Even square adjacent
    square.addEventListener(`dblclick`, function () {
      let a = square.getAttribute(`id`);
      let b;
      let d;
      //even squares remove odd
      if (a % 2 === 0) {
        b = parseInt(a) + 1; // convert string to int to allow maths
        d = document.getElementById(b);
        if (d === null) {
          alert("No odd numbererd square to remove!");
        } else {
          d.remove();
        }
        //odd number squares removing even
      } else {
        b = parseInt(a) - 1; // odd number going to remove the even one
        d = document.getElementById(b);
        if (d === null) {
          alert("No even numbered square to remove!");
        } else {
          d.remove();
        }
      }
    }); // end addEventListener dblclick
  });
}); //end button.addEventListener
//end of document.addEventListener

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
