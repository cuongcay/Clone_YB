function submit(){
    const input = document.getElementById("input").value;
    const hello = document.getElementById("hello");

    const submit = document.getElementById("submit");

    const mod = input%2;

    if(mod ===1){
        hello.innerHTML = `
            ${input}: " la so le";
        `;
    }else{
        hello.innerHTML = `
        ${input} + " la so chan"`;
    }
}
