function reSet() {
  document.getElementById("screen").value = "";
}
function calculate() {
  calculator.screen.value = eval(calculator.screen.value);
}
var x = document.getElementsByClassName("addValue");
var i;
for (i = 0; i < x.length; i++) {
  x[i].setAttribute("onclick", "calculator.screen.value += value;");
}
