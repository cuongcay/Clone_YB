function submit(){
    const input = document.getElementById("input").value;
    const hello = document.getElementById("hello");

    const submit = document.getElementById("submit");

    const mod = input%2;

    if(mod ===1){
        hello.innerHTML = `
        
        `
    }else{
        console.log("la so chan");
    }
}
