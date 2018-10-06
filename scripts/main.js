

function generate(){
  var outputTag = document.getElementById("output");
  var inputName = document.getElementById("inputName").value;
  var output = "";
  for (var i= 0; i < 20; i++) {
    output += inputName + " ";
  }
  outputTag.textContent = output;
}