let count = 0;

function cc(card){

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return count++;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            return count--;
        case 7:
        case 8:
        case 9:
            return count;
    }
    var holdbet = 'hold';
    if(count > 0){
        holdbet = "bet";
    }
    
    return count + " " + holdbet;

}

function test(a,b){
    return a+b;
}
console.log(test(2,2))

