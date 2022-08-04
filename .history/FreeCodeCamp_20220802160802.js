function submit(){
    const input = document.getElementById("input");
    const inputt =input.value;
    const hello = document.getElementById("hello");

    const submit = document.getElementById("submit");

    const mod = inputt%2;

    switch(mod){
        case 1:
            hello.innerHTML = `${inputt} la so le`;
            break;
        case 0:
            hello.innerHTML = `${inputt} la so chan`;
            break;
    }
}

const object= {
    name: "cuong",
    age: 21,
    gender: "male",
    university: "IUH",
    Phone
}
