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
  for (let i = 0; i < nickname.length; i++) {
    if(charMap.has(nickname[i])){
      numberOfSwaps++;
    }
  }
  // array with result combinations
  var permArr = [];
  // array from nickname string
  var nicknameArr = Array.from(nickname);
  // loop through the nickname trying to find chars to replace
  for (let i = 0; i < nickname.length; i++) {
    var swapChar = nicknameArr[i];
    // check if the map has this key
    if(charMap.has(nickname[i])){
      // // test sample for code runner
      // let a = ['k', 'v'];
      // let b = [];
      // var swapChar = "a";
      // let swapCounter = 1;
      // for (let j = 0; j < swapCounter; j++) {
      //   b.push(a[j]);
      //   b.push(a[j]);
      // }
      // swapCounter++;
      // console.log(b);
      // b[0].push(swapChar);
      // b[1].push(3);
      // console.log(b);
      // let c = [];
      // for (let j = 0; j < b.length; j++) {
      //   c.push(b[j]);
      //   c.push(b[j]);
      // }
      // console.log(c);
      // console.log(c[0]);
      // // for (let j = 0; j < c.length; j+=2) {
      //   c[4].splice(2,1, swapChar);

      // // }
      // console.log(c);
    } else {
      // // test sample for code runner
      // let a = [[1,2],[3,4]];
      // for (let j = 0; j < a.length; j++) {
      //   a[j].push(5);
      // }
      // console.log(a);
    }
  }
  // concat the result string
  for (let i = 0; i < permArr.length; i++) {
    for (let j = 0; j < nickname.length; j++) {
      newNickname += permArr[i][j];
    }
    newNickname += " ";
  }
  return newNickname;
}