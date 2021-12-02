//Q2

const prompts = require("prompt-sync")();
let nthHarmonicNumber = prompts("Enter the nth value : ");
let harmonicNumber = 0;
nthHarmonicNumber = parseInt(nthHarmonicNumber)
for(i=1;i<=nthHarmonicNumber;i++){
    harmonicNumber += 1/i;
}
console.log((i-1)+"th Harmomnic number = "+harmonicNumber);
