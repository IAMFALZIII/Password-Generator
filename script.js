// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//* Created password characters
function generatePassword() {
  var lowercaseletters = "qwertyuiopasdfghjklzxcvbnm";
  var uppercaseletters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var numbers = "1234567890";
  var specialchar = "~!@#$%^&*()-=+";
//* Ask for password info
  var Length = prompt("Amount of characters between 8 to 128");
  var Lowercase = prompt("Would you like lowercase characters?");
  var Uppercase = prompt("Would you like uppercase characters?");
  var Numbers = prompt("Would you like numbers?");
  var Special = prompt("Would you like special characters?");

  var password = "";
  var selection = "";

  userLength = parseInt(userLength);

  if (userLowercase === true) {
    selection = selection + lowercaseletters;

  
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
