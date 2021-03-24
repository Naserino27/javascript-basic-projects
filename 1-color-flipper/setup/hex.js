const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//globala variabler
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//lyssna efter knappen och gör en loop som skapar en slumpad hexfärg
btn.addEventListener("click", function () {
    //variabel som håller # som sedan fylls på med 6 slumpade hexvärden
    let hexColor = "#";

    //loopa 6ggr med ett nytt hexvärde varje gång
    for (let i = 0; i < 6; i++) {
        //lägg på nytt hexvärde för varje loop
        hexColor += hex[getRandomNumber()];
    }

    //byt bakgrundsfärgen till det värdet vi får fram
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}