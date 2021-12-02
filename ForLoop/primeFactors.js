//Q6

const prompts = require("prompt-sync")();
let number = parseInt(prompts("Enter a number to find prime factors : "));
for(i=2;i<=number;i++){
    if(number%i==0){
        let isPrime = true;
        for(j=2;j<i;j++){
            if(i%j==0){
                isPrime = false;
            }
        }
        if(isPrime) console.log(i);
        number = number/i;
    }
}