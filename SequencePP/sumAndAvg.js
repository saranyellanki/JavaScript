//Q4 Genrate 5 random numbers and find sum and average

let random1 = Math.floor(Math.random()*90)+10;
let random2 = Math.floor(Math.random()*90)+10;
let random3 = Math.floor(Math.random()*90)+10;
let random4 = Math.floor(Math.random()*90)+10;
let random5 = Math.floor(Math.random()*90)+10;
console.log("Random Numbers : "+random1 +","+ random2 + "," + random3 + ","+ random4+","+random5);
let sum = random1+random2+random3+random4+random5;
let avg = (random1+random2+random3+random4+random5)/5;
console.log("Sum : "+sum);
console.log("Avg : "+avg);