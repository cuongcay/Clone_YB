function submit(){
    const input = document.getElementById("input").value;
    const hello = document.getElementById("hello");

    const submit = document.getElementById("submit");

    hello.innerHTML = `
    <p>Hello, ${input}</p>`
}