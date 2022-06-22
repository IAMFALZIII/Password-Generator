// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var lowercaseletters = "qwertyuiopasdfghjklzxcvbnm"
  var uppercaseletters = "QWERTYUIOPASDFGHJKLZXCVBNM"
  var numbers = "1234567890"
  var specialchar = "~!@#$%^&*()-=+"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
