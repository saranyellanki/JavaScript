//Q3

let isWinner = false;
let coin;
let headCount = 0;
let tailCount = 0;
while(!isWinner){
    coin = Math.floor(Math.random()*2);
    if(coin==0) {
        headCount++;
        if(headCount==11) {
            console.log("Head Won "+headCount);
            isWinner = true;
        }
    }
    else {
        tailCount++;
        if (tailCount==11) {
            console.log("Tail Won "+tailCount);
            isWinner = true;
        }
    }
}