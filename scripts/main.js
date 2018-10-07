// TODO add intervals for output and sample
// TODO cookies to not to show onload sample one more time


function musterData(inputName) {
  var outputElement = document.getElementById("output");
  var inputName = document.getElementById("inputName");
  inputName.value = "mustermann";
  setTimeout(function(){outputElement.textContent += "mu5termann" + " " }, 500);
  setTimeout(function(){outputElement.textContent += "mu5t3rmann" + " " }, 1000);
  setTimeout(function(){outputElement.textContent += "mu5t3rm4nn" + " "}, 1500);
  setTimeout(function(){outputElement.textContent += "must3rmann" + " "}, 2000);
  setTimeout(function(){outputElement.textContent += "must3rm4nn" + " "}, 2500);
  setTimeout(function(){outputElement.textContent += "musterm4nn" + " "}, 3000);
  setTimeout(function(){outputElement.textContent += "mu5term4nn" + " "}, 3500);
}

function clearDisplay(){
  document.getElementById("inputName").value = "";
  document.getElementById("output").textContent = "";
}

function generate(){
  var outputElement = document.getElementById("output");
  var inputName = document.getElementById("inputName").value;
  // var output = "";
  // for (var i= 0; i < 20; i++) {
  //   output += inputName + " ";
  // }
  // output.textContent = output;
  output.textContent = randomize(inputName);
}
function randomize(nickname){
  // array with all replace combinations to convert to char map
  var charArray = [
    [ 'l', '1' ],
    [ 'z', '2' ],
    [ 'e', '3' ],
    [ 'a', '4' ],
    [ 's', '5' ],
    [ 'b', '6' ],
    [ 'g', '9' ],
    [ 'o', '0' ],
  ];
  var charMap = new Map(charArray);
  // to save the main result string
  var variations = "";
  // loop through the nickname trying to find chars to replace
  for (let i = 0; i < nickname.length; i++) {
    var tempArr = Array.from(nickname);
    // check if the map has this key
    if(charMap.has(nickname[i])){
      // replace found char in array
      tempArr[i] = charMap.get(nickname[i]);
      // create string from array
      var tempName = "";
      for (let i = 0; i < tempArr.length; i++) {
        tempName += tempArr[i];
      }
      // add string to the main result
      variations += tempName + " ";
    }
  }
  return variations;
}