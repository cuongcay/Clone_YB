
const object= {
    name: "cuong",
    age: 21,
    gender: "male",
    university: "IUH",
    Phone: 0949604728
}
function submit(){
    const info = document.getElementById("info");

    info.innerHTML = `
        <ul>
            <li>Ten: ${object.name}</li>
            <li>Ten: ${object.age}</li>
            <li>Ten: ${object.gender}</li>
            <li>Ten: ${object.university}</li>
            <li>Ten: ${object.name}</li>
        </ul>
    `
}
