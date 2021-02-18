var light = document.querySelector("#light");
var myVar;

function start() {
  light.setAttribute("onclick", "myStopFunction()");
  myVar = setInterval(myTimer, getFreq());
}

function myTimer() {
  let temp = light.getAttribute("src");
  light.setAttribute("src", light.getAttribute("href"));
  light.setAttribute("href", temp);
}

function myStopFunction() {
  clearInterval(myVar);
  light.setAttribute("onclick", "start()");
  light.setAttribute("src", "flashlightoff.jpg");
  light.setAttribute("href", "flashlighton.jpg");
}

function getFreq() {
  return document.querySelector("#range").value;
}
