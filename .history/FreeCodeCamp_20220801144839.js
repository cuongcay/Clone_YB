const arr = ["hello", "world"]

function nextInline( arr, item){
    return item;
}
console.log("before: " + JSON.stringify(arr));
console.log("after: " + JSON.stringify(nextInline(arr, 1)));
