
    const a = 10;

function local() {
    return opp = 5
}
function F2(a){
    var output = "";
    output += "myLocal: " + a ;
    console.log(output)
}
F2(local());