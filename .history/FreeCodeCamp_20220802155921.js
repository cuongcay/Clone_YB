function submit(){
    const input = document.getElementById("input").value;
    const hello = document.getElementById("hello");

    const submit = document.getElementById("submit");

    const mod = input%2;

    switch(mod){
        case 1:
            hello.innerHTML = `${input} la so le`;
            break;
        case 0:
    }
}
