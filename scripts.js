document.addEventListener("DOMContentLoaded", function () {
  //Get screen dimensions to allow squares to move as much as possible.
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  //screenWidth slightless than screen so square remains visible
  screenWidth = screenWidth - 60;
  screenHeight = screenHeight - 60;
  let foo = window.innerWidth;

  console.log(`adjusted screenW ${screenWidth} vs ${foo}`);
  //console.log(window.innerHeight);
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
    //Create parent div
    let squareContainer = document.createElement(`div`);
    squareContainer.classList.add(`squareContainer`);
    //Create square div
    let square = document.createElement(`div`);
    square.classList.add(`square`);
    squareContainer.appendChild(square);
    document.body.appendChild(squareContainer);
    //Scope is import - below here elemnt must exist first in the DOM
    square.setAttribute(`id`, `sq-${j}`);
    square.addEventListener(`click`, function () {
      square.style.backgroundColor = rainbow();
    });

    let squ = document.getElementById("sq-1");
    //squareEngine(squ, `right`, (distance = 200), (duration = 5000));
    squareEngine(squ, `right`, screenWidth, (duration = 5000));
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

  function xmoveRight(element) {
    let elStyle = window.getComputedStyle(element);
    let leftValue = elStyle.getPropertyValue("left").replace("px", "");
    element.style.left = Number(leftValue) + 600 + "px";
  }

  function squareEngine(element, direction, distance = 20, duration = 1000) {
    // Chose left or right and it picks right
    let topOrLeft =
      direction === "left" || direction === "right" ? "left" : "top";
    let isNegated = direction === "up" || direction === "left";
    console.log(isNegated);
    //Sub condition then makes teh chocie of left correct  as it was right
    //if movement is left or up minus the number to get the opposite direction
    if (isNegated) {
      distance *= -1;
      console.log(distance);
    }
    // get the full .css value of the element
    //Its overkill but want to get use to using it.
    let squareStyle = window.getComputedStyle(element);
    let value = squareStyle.getPropertyValue(topOrLeft).replace("px", "");
    let destination = Number(value) + distance;
    let frameDistance = distance / (duration / 10);

    function moveAFrame() {
      elStyle = window.getComputedStyle(element);
      /*
      console.log(elStyle.right);
      console.log(elStyle.left);
      console.log(elStyle.bottom);
      console.log(elStyle.top);
*/
      value = elStyle.getPropertyValue(topOrLeft).replace("px", "");

      let newLocation = Number(value) + frameDistance;
      let beyondDestination =
        (!isNegated && newLocation >= destination) ||
        (isNegated && newLocation <= destination);
      //Move square or clear setInterval
      if (beyondDestination) {
        element.style[topOrLeft] = destination + "px";
        clearInterval(movingFrames);
      } else {
        element.style[topOrLeft] = newLocation + "px";
      }
    }
    //call the function to move the square
    let movingFrames = setInterval(moveAFrame, 5);
  }

  function squareEngine2(element, direction, width, height, speed = 1000) {
    /*Bit like a tower game - we are going to have a fixed route going 
    Going from Top left to bottom left - alternate rows will be right to left
    --X|
    X--X */
    // get the full .css value of the element
    //Its overkill but want to get use to using it.
    let squareStyle = window.getComputedStyle(element);
    let squareLeft = squareStyle.left;
    let squareRight = squareStyle.right;
    let squareTop = squareStyle.top;
    let squareBottom = squareStyle.bottom;

    let distanceLeft = squareStyle
      .getPropertyValue(topOrLeft)
      .replace("px", "");
    // going right
    //need to compare objects position before and now - if its going towards up then going right
    //when it matches screenWidth it goes down a few pixels and then goes left and distance goes towards 0.
  }
}); //End of DOMContentLoaded
