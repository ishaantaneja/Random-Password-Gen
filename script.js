const passwordBox = document.getElementById("password");

const lent = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numb = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + numb + symbol;

function createPassword(){
    let password = "";
    password += allChars[Math.floor(Math.random() * upperCase.length)];
   
	while(lent>password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
    }
   
    passwordBox.value = password;
    }




    




