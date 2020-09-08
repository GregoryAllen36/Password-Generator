// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", "'", "<", ">", ".", "?", "/", "?", "/", "|", ];


// varibles
var confirmLength;
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = parseInt(prompt("How many characters would you like in password to contain?"));
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }



  // Assign in action to the password parameters 
  var passwordCharacters;
  // Assign in action to the password parameters to fix
  var passwordCharacters = []

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmSpecialCharacter = true) {
    passwordCharacters === specialChar;
  }
  if (confirmNumericCharacter === true) {
    passwordCharacters = number;
  }
  if (confirmUpperCase === true) {
    passwordCharacters = alphaUpper;
  }
  if (confirmLowerCase === true) {
    passwordCharacters = alphaLower;
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  // Empty string to be filled based on for loop selecting random characters in above array
  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  console.log(randomPassword)
  return randomPassword;
  console.log(passwordCharacters)


  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  console.log(randomPassword);
}

// Add event listener to gene button
generateBtn.addEventListener("click", writePassword);