//Q4

const prompts = require("prompt-sync")();
let initialValue = prompts("Enter initial number of range : ")
let finalValue = prompts("Enter final number of range : ")
initialValue = parseInt(initialValue)
finalValue = parseInt(finalValue)
let isPrime;
for(i=initialValue;i<=finalValue;i++){
    isPrime = true;
    for(j=2;j<i;j++){
        if(i%j==0) {
            isPrime=false;
            break;
        }
    }
    if(isPrime) {
        console.log(i);
    }
}