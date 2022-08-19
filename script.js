
// Write password to the #password input


  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  function generatePassword() {
    
    var password_length = prompt("How many characters would you want in the password? Please select between 8 and 128 Characters"); 
    
    
    if (password_length >= 8 && password_length <= 128)
    {
      
      var charactersUp = prompt("Would you like to include Uppercase Characters? Y or N");
      var charactersDown = prompt("Would you like to include Lowercaswe Characters? Y or N");
      var numbers = prompt("Would you like to include Numbers Characters? Y or N");
      var specialcharaters = prompt("Would you like to include Special Characters Characters? Y or N");


      var collectionlettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//collectionlettersUp store all the Uppercase letters
      var collectionlettersDown = "abcdefghijklmnopqrstuvwxyz";//collectionlettersDown store all the Lowercase letters
      var collectionnumbers = "1234567890";//collectionnumbers store all the numbers 0-9
      var collectionspecial_cha = "!#$%&'()*+-./:;<=>?@[\]^_{|}~";//collectionspecial_cha store the special characters

      //var collectionletters = "";
      var generatedpassword = "";//Declare the variable generatedpassword with the value empty character.
      var collectionletters = "";//Declare the variable collectionletters with the value empty character.
      
      if (charactersUp === 'Y' || charactersUp === 'y') { 
        collectionletters = collectionletters.concat(collectionlettersUp);
        //Concatenate the variable collectionletters with the variable collectionlettersUp
      }
      if (charactersDown === 'Y' || charactersDown === 'y') {
        collectionletters = collectionletters.concat(collectionlettersDown); 
        //Concatenate the variable collectionletters with the variable collectionlettersDown
      }
      
      if (numbers === 'Y' || numbers === 'y') {  
        collectionletters = collectionletters.concat(collectionnumbers); 
        //Concatenate the variable collectionletters with the variable collectionnumbers
      }
      if (specialcharaters === 'Y' || specialcharaters === 'y') {   
        collectionletters = collectionletters.concat(collectionspecial_cha);
        //Concatenate the variable collectionletters with the variable specialcharaters
      }

      var sizeletters = collectionletters.length;//Assign the collectionletters lenght to the variable sizeletters.
      
      for (var i = 1; i <= parseInt(password_length); i++) {
        generatedpassword = generatedpassword + collectionletters.charAt(Math.floor(Math.random() * sizeletters)); 
        //Generate a random letters from the collectionletters variable and it assined to the variable generatedpassword.
      }
      
      return generatedpassword;//Rerutn the password generated.
    }
    
    else {
      alert("Password length must contain between 8 and 128 Characters... Try again!")
      //In case the password lenght does nor match the criteria, it shows the message to the user.
      
    }
  
  }

  function writePassword() {
    var password = generatePassword();// The variable password gets the password generated from the function generatePassword().
  
    var passwordText = document.querySelector("#password");
    //the object #password is assigned to the variable passwordText.

    passwordText.value = password;
    //The password generated is assigned to the textarea object to be shown on the form.
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  