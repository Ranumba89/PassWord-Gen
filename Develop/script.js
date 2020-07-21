// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var specialChars='!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
var lowerCaseChars='abcdefghijklmnopqrstuvwxyz';
var upperChars=lowerCaseChars.toUpperCase();
var numberChars='0123456789';

function generatePassword(){
  var newPassword = '';
  var possibleChars='';
  alert ("Pick a Criteria")

  var passlength=prompt("Password Length:(8 - 128 Characters) ");

  if (passlength>=8 && passlength<=128){

    //Criteria for  special charecter
    var ans=confirm("Do you want special Characters?");
    if (ans===true){
      var pos=Math.floor(Math.random()*specialChars.length);
      newPassword = newPassword + specialChars.charAt(pos)
      possibleChars = possibleChars + specialChars;
    }

    //Criteria for  upper case charecters
    var ans=confirm("Do you want upper case characters?");
    if (ans===true){
      var pos=Math.floor(Math.random()*upperChars.length);
      newPassword = newPassword + upperChars.charAt(pos)
      possibleChars= possibleChars + upperChars;
    }
    //Criteria for  Lower case charecters
    var ans=confirm("Do you want Lower case characters?");

    if (ans===true){
      var pos=Math.floor(Math.random()*lowerCaseChars.length);
      newPassword = newPassword + lowerCaseChars.charAt(pos)
      possibleChars= possibleChars + lowerCaseChars;
    }
    var ans=confirm("Do you want Numbers?");

    if (ans===true){
      var pos=Math.floor(Math.random()*numberChars.length);
      newPassword = newPassword + numberChars.charAt(pos)
      possibleChars= possibleChars + numberChars;
    }
// final path
    if (newPassword.length>0){
      var restCharLen = passlength - newPassword.length;
      for (var index = 0; index < restCharLen; index++) {
        var pos=Math.floor(Math.random()*possibleChars.length);
        newPassword = newPassword + possibleChars.charAt(pos)
      }
    }

  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  passwordText.value = "";
  var password = generatePassword();
  if (password.length>0){
    passwordText.value = password;
  }else{
   alert("Wrong criteria");
  }
               
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


