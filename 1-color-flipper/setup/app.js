const colors = ["green", "red", "blue", "yellow"];
//sätt upp globala variabler
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//lyssna efter knappen
btn.addEventListener('click', function () {
    //få fram ett slumpat tal mellan 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    //byt färg på sidan och texten beroende på vilket nummer i arrayen som slumpas
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//Sätt upp en funktion som genererar ett slumpat nummer mellan 0-3
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
