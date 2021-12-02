//Q2

const prompts = require("prompt-sync")();
let number1 = parseInt(prompts("Enter first number : "));
let number2 = parseInt(prompts("Enter second number : "));
function palindrome(num1,num2){
    let updateNum = 0;
    while(num2!=0){
        let unitDigit = num2%10
        updateNum = updateNum*10 + unitDigit 
        num2 = Math.floor(num2/10);
    }
    if(num1==updateNum) console.log("The numbers "+number1+ " and " +number2+" are Palindromes");
    else console.log("The numbers "+number1+ " and " +number2+" are not Palindromes");
}
palindrome(number1,number2);