// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l"
,"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L"
,"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numeralChars = ["1","2","3","4","5","6","7","8","9","0"];

var specialChars = [" ","!",'"',"#","$","%","&","'","(",")","*","+"
,"-",",",".","/",":",";","<",">","=","?","@","[","}","\\","^"
,"_","`","{","}","|","~"];



function generatePassword() {
  var passLength = parseInt(prompt("how long should the password be?", "0"));
  var useLower = window.confirm("Do you want the password to contain lower case characters?");
  var useUpper = window.confirm("Do you want the password to contain uppercase characters?");
  var useNumeral = window.confirm("Do you want the password to contain numerals?");
  var useSpecial = window.confirm("do you want the password to contain special characters? ex. ! or ?");
  var possibleChars = [];
  var pass = "";

  if (useLower) {
    possibleChars = possibleChars.concat(lowerChars);
  };
  if (useUpper) {
    possibleChars = possibleChars.concat(upperChars);
  };
  if (useNumeral) {
    possibleChars = possibleChars.concat(numeralChars);
  };
  if (useSpecial) {
    possibleChars = possibleChars.concat(specialChars);
  };
  for (var i = 0; i < passLength; i++) {
     pass += possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  return pass;
}
