//Q4 Arithmetic Operations find min and max

let a = prompts("Enter number 'a' : ")
let b = prompts("Enter number 'b' : ")
let c = prompts("Enter number 'c' : ")
a = parseInt(a)
b = parseInt(b)
c = parseInt(c)
const operation1 = a+b*c;
const operation2 = a%b+c;
const operation3 = c+a/b;
const operation4 = a*b+c;
console.log("Values of operation : "+operation1+","+operation2+","+operation3+","+operation4);
let maximum = operation1;
if(operation2>maximum) maximum = operation2;
if(operation3>maximum) maximum = operation3;
if(operation4>maximum) maximum = operation4;
console.log("Maximum Value = "+maximum);
let minimum = operation1;
if(operation2<minimum) minimum = operation2;
if(operation3<minimum) minimum = operation3;
if(operation4<minimum) minimum = operation4;
console.log("Minimum Value = "+minimum);