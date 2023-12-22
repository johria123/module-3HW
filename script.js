// Assignment Code
var generateBtn = document.querySelector("#generate");

// create the constant arrays
const charUpperArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
const charLowerArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
const charNumericArray = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
const charSpecialArray = [' ', '!', '\'', '\"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "}", "|", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// generate the password
function generatePassword() {
  // initialize a variable
  var password = ""

  var passLength = prompt("Choose a length of characters between 8 to 128. It cannot exceed 128");
  if (passLength < 8 || passLength > 128) {
    alert("You have messed up. Redo the password");
  } else {
    var charLowerCase = prompt("Confirm whether you want to include lowercase characters. Enter Yes or No!");
    if (charLowerCase.toLowerCase() !== 'yes' && charLowerCase.toLowerCase() !== "no") {
      alert("You have not given proper information!")
    } else { 
      // change them to true or false
      if (charLowerCase.toLowerCase() == 'yes') {
        charLowerCase = true
      } else {
        charLowerCase = false
      }
      var charUpperCase = prompt("Confirm whether you want to include uppercase characters. Enter Yes or No!");
      if (charUpperCase.toLowerCase() !== 'yes' && charUpperCase.toLowerCase() !==  "no") {
        alert("You have not given proper information!")
      } else {
        if (charUpperCase.toLowerCase() == 'yes') {
          charUpperCase = true
        } else {
          charUpperCase = false
        }
        var charNumeric = prompt("Confirm whether you want to include numeric characters. Enter Yes or No!");
        if (charNumeric.toLowerCase() !== 'yes' && charNumeric !== "no") {
          alert("You have not given proper information!")
        } else {
          if (charNumeric.toLowerCase() == 'yes') {
            charNumeric = true
          } else {
            charNumeric = false
          }
          var charSpecial = prompt("Confirm whether you want to include special characters. Enter Yes or No!");
          if (charSpecial.toLowerCase() !== 'yes' && charSpecial.toLowerCase() !== "no") {
            alert("You have not given proper information!")
          } else {
            if (charSpecial.toLowerCase() == 'yes') {
              charSpecial = true
            } else {
              charSpecial = false
            }
            // check the variables
            console.log(charLowerCase)
            console.log(charUpperCase)
            console.log(charNumeric)
            console.log(charSpecial) 
            
            var charactersToInclude = []

            if(charLowerCase) {
              charactersToInclude = charactersToInclude.concat(charLowerArray);
            } 
            if (charUpperCase) {
              charactersToInclude = charactersToInclude.concat(charUpperArray);
            }
            if (charNumeric) {
              charactersToInclude = charactersToInclude.concat(charNumericArray);
            }
            if (charSpecial) {
              charactersToInclude = charactersToInclude.concat(charSpecialArray);
            }
            // create the password 
            for (var i = 0; i < passLength; i++) {
              var randomIndex = Math.floor(Math.random() * charactersToInclude.length);
              password  += charactersToInclude[randomIndex];
            }
            console.log(password)
            return password
          }
        }
      }
    }
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




