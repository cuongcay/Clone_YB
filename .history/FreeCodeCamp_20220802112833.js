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

    return "Change Me";
}
    const holdbet = "hold";
    if(count > 0){
        con holdbet;
    }else{
        return holdbet = "bet"
    }
    

cc(4); cc('K'); cc(2)