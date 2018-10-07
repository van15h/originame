// TODO add intervals for output and sample
// TODO cookies to not to show onload sample one more time

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


function musterData(inputName) {
  // var outputElement = document.getElementById("output");
  // var inputName = document.getElementById("inputName");
  // inputName.value = "mustermann";
  // setTimeout(function(){outputElement.textContent += "mu5termann" + " " }, 500);
  // setTimeout(function(){outputElement.textContent += "mu5t3rmann" + " " }, 1000);
  // setTimeout(function(){outputElement.textContent += "mu5t3rm4nn" + " "}, 1500);
  // setTimeout(function(){outputElement.textContent += "must3rmann" + " "}, 2000);
  // setTimeout(function(){outputElement.textContent += "must3rm4nn" + " "}, 2500);
  // setTimeout(function(){outputElement.textContent += "musterm4nn" + " "}, 3000);
  // setTimeout(function(){outputElement.textContent += "mu5term4nn" + " "}, 3500);
}

function clearDisplay(){
  document.getElementById("inputName").value = "";
  document.getElementById("output").textContent = "";
}

function generate(){
  var outputElement = document.getElementById("output");
  var inputName = document.getElementById("inputName").value;
  output.textContent = randomize(inputName);
}

function randomize(nickname){
  // to save the result string
  var newNickname = "";
  // how many chars to swap is there in nickname
  var numberOfSwaps = 0;
  var swapCounter = 0;
  for (let i = 0; i < nickname.length; i++) {
    if(charMap.has(nickname[i])){
      numberOfSwaps++;
    }
  }
  console.log("number of swaps: " + numberOfSwaps);
  var permArr = [];
  permArr.push(new Array());
  // console.log("size of array in each row: " + permArr.length);
  var nicknameArr = Array.from(nickname);
  // loop through the nickname trying to find chars to replace
  for (let i = 0; i < nickname.length; i++) {

    var swapChar = nicknameArr[i];
    // check if the map has this key
    if(charMap.has(nickname[i])){
      // swapCounter++;
      // var tempArr = new Array((permArr.length)*2);
      var tempArr = [];
      var index = 0;
      for (let k = 0; k < 2; k++) {
        tempArr.push(permArr[index]);
      }
      console.log(tempArr[0]);
      console.log(tempArr[1]);
      tempArr[0].push(charMap.get(swapChar));
      permArr = tempArr;
    } else {
      for (let j = 0; j < permArr.length; j++) {
        permArr[j].push(swapChar);
        // console.log("size of perm arr:" + permArr.length);
        // console.log("first char: " + permArr[j][i]);
      }
    }
  }
  for (let i = 0; i < permArr.length; i++) {
    for (let j = 0; j < nickname.length; j++) {
      newNickname += permArr[i][j];
    }
    newNickname += " ";
  }
  return newNickname;
}