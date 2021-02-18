var light = document.querySelector("#light");
var myVar;

function start() {
  light.setAttribute("onclick", "myStopFunction()");
  myVar = setInterval(myTimer, getFreq());
}

function myTimer() {
  let temp = light.getAttribute("src");
  light.setAttribute("src", light.getAttribute("altsrc"));
  light.setAttribute("altsrc", temp);
}

function myStopFunction() {
  clearInterval(myVar);
  light.setAttribute("onclick", "start()");
  light.setAttribute("src", "./images/flashlightoff.jpg");
  light.setAttribute("altsrc", "./images/flashlighton.jpg");
}

function getFreq() {
  return document.querySelector("#range").value;
}
