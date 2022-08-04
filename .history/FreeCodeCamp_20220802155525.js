function submit(){
    const input = document.getElementById("input").value;
    const hello = document.getElementById("hello");

    const submit = document.getElementById("submit");

    const mod = input%2;

    if(mod ===1){
        console.log("la so le");
    }else{
        console.log("le le");
    }
}
