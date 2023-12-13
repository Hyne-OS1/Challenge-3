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

function generatePassword() {

  // this will ask you if you want to add your special characters etc to your password or not
  //confirm will act as your prompt on whether or not you want to use this variable in your password generation or not using "okay" or "cancel"
var Numbers = confirm('do you want to include numbers?');
var SpecialCharacters = confirm('do you want to include special characters?');
var LowerCase = confirm('do you want to include lowercase letters?');
var UpperCase = confirm('do you want to include uppercase letters?');

  // '' puts them into string and assigns each variable by putting them inside the apostrophes 
  // assign each variable into a simple array 
  // assign each boolean with an if function
var MyVariables = '';

if (Numbers) {
    MyVariables += '0123456789';
  }
if (SpecialCharacters) {
    MyVariables += '!@#$%^&*()_-+=<>?/[]{}|';
  }
if (LowerCase) {
    MyVariables += 'abcdefghijklmnopqrstuvwxyz';
  }
if (UpperCase) {
    MyVariables += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } 

  // if you dont choose a selection from the allcharacters variable you should be given a prompt saying that you have to choose at least one 
  //MyVariables = nothing
if (MyVariables === '') {
    alert('please choose at least one password trait in order to generate a new password!');
    return;
  }

  //first alert will happen after selecting your previous variables for your password
  //second alert will only trigger if you do not choose a number of charcters between 8 - 128
  //break = terminates the loop below 
  //while (true) = as long as the code remains true it will continue to loop until a break or proven false
  while (true) {
    var input = prompt('Enter your desired password length :');
    if (input === null) break; 
    var length = input.trim().length > 0 ? +input : 0;
  
    if (length >= 8 && length <= 128) {
      passwordLength = length;
      break;
    } else {
      alert('you must have a minimum of 8 characters and no more than 128 characters, please try again :D');
    }
  }
  
  var password = '';
  
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * MyVariables.length);
    password += MyVariables.charAt(randomIndex);
  }
  
  return password;
}
