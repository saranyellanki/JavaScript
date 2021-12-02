//Q5 Unit Conversion

//Q5a
const feet = 12;
const prompts = require("prompt-sync")();
let userInput = prompts("Enter number in inches to convert to feet : ")
let result = userInput/feet;
console.log(userInput+" inches = "+result+" feet");

//Q5b
const squareMeters = 0.092903;
let length = prompts("Enter length of the plot in feet : ")
let breadth = prompts("Enter breadth of the plot in feet : ")
const result = length*breadth*squareMeters;
console.log(length+" feet"+" * "+breadth+" feet = "+result+" square meters");

//Q5c
let numOfPlots = prompts("Enter number of plots : ");
const acres = 2.29568e-5;
const result = length*breadth*acres*numOfPlots;
console.log(numOfPlots+" plots of "+length+" feet"+" * "+breadth+" feet = "+result+" acres");
