//Q3

const prompts = require("prompt-sync")();
let number = parseInt(prompts("Enter a number : "));
function isPrime(num){
    for(let i = 2; i<num; i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
if(isPrime(number)){
    console.log(number+" is a Prime Number");
} else console.log(number+" is not a Prime Number");
function palindrome(num){
    let updateNum = 0;
    while(num!=0){
        let unitDigit = num%10
        updateNum = updateNum*10 + unitDigit 
        num = Math.floor(num/10);
    }
    if(isPrime(updateNum)){
        console.log(updateNum+" is a Prime number");
    }else console.log(updateNum+" is not a prime number");
}
palindrome(number);