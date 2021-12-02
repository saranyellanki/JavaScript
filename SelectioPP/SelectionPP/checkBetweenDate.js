//Q2 Day and Month checks between to dates and prints boolean

const prompts = require("prompt-sync")();
let day = prompts("Enter day of the month : ")
let month = prompts("Enter month : ")
month.toLowerCase;
if((month=="march" || month=="april" || month=="may" || month=="june") && (day>=20 & day<=31)) console.log(true);
else console.log(false);