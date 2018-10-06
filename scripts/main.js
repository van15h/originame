function musterData() {
  var inputName = document.getElementById("inputName");
  inputName.value = "mustermann";
  document.getElementById("output").textContent = "mu5termann mu5t3rmann mu5t3rm4nn must3rmann must3rm4nn musterm4nn mu5term4nn";
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