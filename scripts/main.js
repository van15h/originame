// TODO add intervals for output and sample
// TODO cookies to not to show onload sample one more time
document.get
function musterData() {
  var inputName = document.getElementById("inputName");
  inputName.value = "mustermann";
  document.getElementById("output").textContent = "mu5termann mu5t3rmann mu5t3rm4nn must3rmann must3rm4nn musterm4nn mu5term4nn";
}

function clearDisplay(){
  document.getElementById("inputName").value = "";
  document.getElementById("output").textContent = "";
}

function generate(){
  var outputTag = document.getElementById("output");
  var inputName = document.getElementById("inputName").value;
  var output = "";
  for (var i= 0; i < 20; i++) {
    output += inputName + " ";
  }
  outputTag.textContent = output;
}