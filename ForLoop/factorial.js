//Q5

const prompts = require("prompt-sync")();
const fact = parseInt(prompts("Enter a number to find factorial : "));
let result = 1;
for(i=1;i<=fact;i++){
    result *= i;
}
console.log(fact+"! = "+result);