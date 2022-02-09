document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement(`button`);
  let buttonTxt = document.createTextNode(`Add Square`);
  button.appendChild(buttonTxt);
  document.body.appendChild(button);
});
