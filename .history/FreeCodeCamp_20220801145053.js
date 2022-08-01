const arr = ["hello", "world"]

function nextInline( arr, item){
    arr.push(item)
    return arr.shift();
}
console.log("before: " + JSON.stringify(arr));
console.log(nextInline(arr, 6));
console.log("Affter: " + JSON.stringify(arr));
