const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function goldScore(par, strokes){
    if(strokes == 1){
        return names
    }
    return "Change Me";
}
goldScore(5,4)