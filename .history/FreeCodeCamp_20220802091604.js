const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function goldScore(par, strokes){
    if(strokes == 1){
        return names[0];
    }else if(strokes <= par -2){
        return names[1];
    }else if(strokes ==)
    return "Change Me";
}
goldScore(5,4)