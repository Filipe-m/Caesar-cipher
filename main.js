var x = 1
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";

function shift(n){
  for (let i = 0; i < alphabet.length; i++){
    let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
}

var normalText = document.getElementById('normalToIncripted');

function encode(message){
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++){
      let index = alphabet.indexOf(message[i]);
      result += newalpha[index];
  }
  return result;
}

function decode(message){
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++){
      let index = newalpha.indexOf(message[i]);
      result += alphabet[index];
  }
  return result;
}

function incription(){
  var incriptedText = document.getElementById('normalToIncripted');
  document.getElementById('incriptedText').innerHTML = encode(incriptedText.value)
  
}


function translation(){
  var normalText = document.getElementById('incriptedToNormal');
  document.getElementById('normalText').innerHTML = decode(normalText.value)

  

}

