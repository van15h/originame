// TODO add intervals for output and sample
// TODO cookies to not to show onload sample one more time

function musterData() {
  var inputName = document.getElementById("inputName");
  inputName.value = "mustermann";
  var output = document.getElementById("output");
  setTimeout(function(){output.textContent += "mu5termann" + " " }, 500);
  setTimeout(function(){output.textContent += "mu5t3rmann" + " " }, 1000);
  setTimeout(function(){output.textContent += "mu5t3rm4nn" + " "}, 1500);
  setTimeout(function(){output.textContent += "must3rmann" + " "}, 2000);
  setTimeout(function(){output.textContent += "must3rm4nn" + " "}, 2500);
  setTimeout(function(){output.textContent += "musterm4nn" + " "}, 3000);
  setTimeout(function(){output.textContent += "mu5term4nn" + " "}, 3500);
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