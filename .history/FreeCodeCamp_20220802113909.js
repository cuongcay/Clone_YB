let count = 0;

function cc(card){

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
             count++;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
        // case 7:
        // case 8:
        // case 9:
        //     count;
    }
    var holdbet = 'hold';
    if(count > 0){
        holdbet = "bet";
    }
    return count + " " + holdbet;
}


console.log(cc(3))

