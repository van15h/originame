// TODO cookies to not to show onload sample one more time

// array with all replace combinations to convert to char map
var charArray = [
  [ 'l', '1' ],
  [ 'z', '2' ],
  [ 'e', '3' ],
  [ 'a', '4' ],
  [ 's', '5' ],
  [ 'b', '6' ],
  [ 'f', '7' ],
  [ 'g', '9' ],
  [ 'o', '0' ],
];
var charMap = new Map(charArray);

function musterData(inputName) {
  var outputElement = document.getElementById("output");
  var inputName = document.getElementById("inputName");
  inputName.value = "mustermann";
  setTimeout(function(){outputElement.textContent += "mu5termann" + " " }, 300);
  setTimeout(function(){outputElement.textContent += "mu5t3rmann" + " " }, 600);
  setTimeout(function(){outputElement.textContent += "mu5t3rm4nn" + " "}, 900);
  setTimeout(function(){outputElement.textContent += "must3rmann" + " "}, 1200);
  setTimeout(function(){outputElement.textContent += "must3rm4nn" + " "}, 1500);
  setTimeout(function(){outputElement.textContent += "musterm4nn" + " "}, 1800);
  setTimeout(function(){outputElement.textContent += "mu5term4nn" + " "}, 2100);
  setTimeout(function(){outputElement.textContent += "mustermann" + " "}, 2400);
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
  // how many combinationsis possible in nickname
  var combinations = 1;
  for (let i = 0; i < nickname.length; i++) {
    if(charMap.has(nickname[i])){
      combinations*=2;
    }
  }

  // array from nickname string
  var nicknameArr = Array.from(nickname);
  // array with result combinations
  var permArr = [...Array(combinations)].map(e => Array(nicknameArr.length));

  // fill the result array with original nickname chars
  for (let i = 0; i < nicknameArr.length; i++) {
    for (let j = 0; j < combinations; j++) {
      permArr[j][i] = nicknameArr[i];
    }
  }

  // start number of repeated replacer char in the column
  var x = combinations/2;
  // start number of x recurrences
  var y = 1;
  // loop through the nickname trying to find chars to replace
  for (let i = 0; i < nicknameArr.length; i++) {
    if(charMap.has(nicknameArr[i])){
      // index of the row to replace char
      let index = 0;
      for (let k = 0; k < y; k++) {
        for (let l=0; l < x; l++) {
          permArr[index][i] = charMap.get(nicknameArr[i]);
          index++;
        }
        // jump to the next replacement
        index+=x;
      }
      // reduction of the size of replacer
      x/=2;
      // increase of the reccurence
      y*=2;
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