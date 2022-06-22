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
  var specialchar = "~!@#$%^&*()-=+<>/?";
//* Ask for password info
  var Length = prompt("Amount of characters between 8 to 128");
  var Lowercase = confirm("Would you like lowercase characters?");
  var Uppercase = confirm("Would you like uppercase characters?");
  var Numbers = confirm("Would you like numbers?");
  var Special = confirm("Would you like special characters?");

  var password = "";
  var selection = "";

  Length = parseInt(Length);

  if (Lowercase === true) {
    selection = selection + lowercaseletters;
  }
  if (Uppercase === true) {
    selection = selection + uppercaseletters;
  }
  if (Numbers === true) {
    selection = selection + numbers;
  }
  if (Special === true) {
    selection = selection + specialchar;
  }
  if (Length >= 8 && Length <= 128) {

    for (var index = 0; index < Length; index++) {
      var randomChar = selection[Math.floor(Math.random() * selection.length)];
      password = password + randomChar;
    }
  }

  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
