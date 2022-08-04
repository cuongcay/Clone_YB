function test(a,b){
    if(a < 0 || b< 0){
        // console.log("undefined");
        return a,b;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
test(-1,2)