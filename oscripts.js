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
    square.setAttribute(`id`, `${j}`);
    //square.setAttribute(`style`, `border: 5pt black solid;`);
    square.setAttribute(`style`, `padding: 15px;`);
    //Random colors when clicked on
    square.addEventListener(`click`, function () {
      square.style.backgroundColor = rainbow();
    });

    //Show Id when mouseover
    square.addEventListener(`mouseenter`, function () {
      //Creaate a child div
      let squareText = document.createTextNode(square.getAttribute(`id`)); //get the sq id ready to display as text
      let sqTextDiv = document.createElement("div");

      let sqTxt = document.createTextNode(squareText.textContent); //add sq id as text
      sqTextDiv.appendChild(sqTxt); //attach text to new div
      let squareDiv = document.getElementById("1"); //get sq div
      squareDiv.appendChild(sqTextDiv); //attach new div to sqdiv
      document.body.appendChild(squareDiv); //attach the lot to the DOM
      sqTextDiv.setAttribute(`id`, `T${j}`);
      sqTextDiv.setAttribute(`style`, `width: .1rem`);
      sqTextDiv.setAttribute(`style`, `height: .1rem`);
      sqTextDiv.setAttribute(`style`, `margin: -10px`);
      sqTextDiv.setAttribute(`style`, `padding: 7px 7px 7px 9px`);
      sqTextDiv.setAttribute(`style`, `color: white`);
      //sqTextDiv.setAttribute(`style`,
      //square.style.backgroundColor = rainbow();

      //End create child

      const myElement = document.getElementById("1");
      for (let i = 0; i < square.children.length; i++) {
        console.log(square.children[i].tagName);
      }
      //let textInDiv = document.createElement(`div`);
      //let squareText = document.createElement(`div`);

      // squareText.setAttribute(`id`, `t+${j}`); right ida but wrong element
    });
    square.addEventListener(`mouseout`, function () {
      console.log(`mouse out`);
      let parent = document.getElementById(`1`);
      let child = document.getElementById(`T1`);
      parent.removeChild(child);
    });

    let squ = document.getElementById("1");
    let wValue = 0;
    // let wvalue = square.getPropertyValue(right);
    // console.log(`wvalue is {wvalue}`);
    // squareEngine(squ, `right`, (distance = 200), (duration = 5000));
    squareEngine(squ, `right`, screenWidth, (duration = 9000));
    /*
    do {
      squareEngine(squ, `right`, screenWidth, (duration = 5000));
      let squareStyle = window.getComputedStyle(squ);
      //console.log(squareStyle);
      wValue = squareStyle.getPropertyValue(`right`);
      console.log(`wvalue is ${wValue}`);
    } while (wValue + 60 <= window.innerWidth); */
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

  function squareEnginex(element, direction, distance = 20, duration = 1000) {
    // Chose left or right and it picks right
    let topOrLeft =
      direction === "left" || direction === "right" ? "left" : "top";
    let isNegated = direction === "up" || direction === "left";
    console.log(isNegated);
    //Sub condition then makes the choice of left correct  as it was right
    //if movement is left or up minus the number to get the opposite direction
    if (isNegated) {
      distance *= -1;
      console.log(distance);
    }
    // get the full .css value of the element
    //Its overkill but want to get use to using it.
    let squareStyle = window.getComputedStyle(element);
    let value = squareStyle.getPropertyValue(topOrLeft).replace("px", "");
    //css left will now = 0 if it didnt before. Thus resetting
    let destination = Number(value) + distance;
    /*framedistance is the distance of image movement per frame
    it  proprtionally changes depending on screen size  
    allow a similar user experience what ever the screen*/
    let frameDistance = distance / (duration / 10);
    console.log(`destination val ${frameDistance}`);

    function moveAFrame() {
      elStyle = window.getComputedStyle(element);

      value = elStyle.getPropertyValue(topOrLeft).replace("px", "");

      let newLocation = Number(value) + frameDistance;
      let beyondDestination =
        (!isNegated && newLocation >= destination) ||
        (isNegated && newLocation <= destination);
      console.log(beyondDestination);
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

  function squareEngine(element, direction, distance, duration = 1000) {
    // Chose left or right and it picks right
    let directionMoved =
      direction === "left" || direction === "right" ? "left" : "top";
    let isNegated = direction === "up" || direction === "left";
    console.log(isNegated);
    //Sub condition then makes the choice of left correct  as it was right
    //if movement is left or up minus the number to get the opposite direction
    if (isNegated) {
      distance *= -1;
      console.log(distance);
    }
    // get the full .css value of the element
    //Its overkill but want to get use to using it.
    let squareStyle = window.getComputedStyle(element);
    let value = squareStyle.getPropertyValue(directionMoved).replace("px", "");
    //css left will now = 0 if it didnt before. Thus resetting
    let destination = Number(value) + distance;
    /*framedistance is the distance of image movement per frame
    it  proprtionally changes depending on screen size  
    allow a similar user experience what ever the screen*/
    let frameDistance = distance / (duration / 3);
    console.log(`destination val ${frameDistance}`);

    function moveAFrame() {
      elStyle = window.getComputedStyle(element);

      value = elStyle.getPropertyValue(directionMoved).replace("px", "");

      let newLocation = Number(value) + frameDistance;
      let beyondDestination =
        (!isNegated && newLocation >= destination) ||
        (isNegated && newLocation <= destination);
      //console.log(beyondDestination);
      //Move square or clear setInterval
      if (beyondDestination) {
        element.style[directionMoved] = destination + "px";
        clearInterval(movingFrames);
        console.log("ready to go down");
      } else {
        element.style[directionMoved] = newLocation + "px";
      }
    }
    //call the function to move the square
    let movingFrames = setInterval(moveAFrame, 5);
  }

  function squareEngine3(element, direction, width, height, speed = 1000) {
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
  } //squareEngine2 end
}); //End of DOMContentLoaded
