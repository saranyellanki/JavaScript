//Q1

const prompts = require("prompt-sync")();
let n = prompts("Enter the value of N : ");
n = parseInt(n)
for(i=0;i<=n;i++) {
    console.log("2 ^ "+ i +" = " + Math.pow(2, i));
}