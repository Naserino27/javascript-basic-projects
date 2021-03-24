// sätt upp count variabeln
let count = 0;

//välj value
const value = document.querySelector("#value");
//alla knappar
const btns = document.querySelectorAll(".btn");

//lyssna om användaren trycker på någon av knapparna
btns.forEach(function (btn) {
    //lyssna efter vilken knapp användaren trycker på genom att få fram det individuella värdet på knapparna
    btn.addEventListener("click", function (e) {
        //lyssna vilket värde knappen användaren tryckt på innehåller
        const styles = e.currentTarget.classList;
        //om knappen har värdet "decrease", sänk värdet på count
        if (styles.contains("decrease")) {
            count--;
        }
        //om knappen har värdet "increase", höj värdet på count
        else if (styles.contains("increase")) {
            count++;
        }
        //om värdet varken är "increase" eller "decrease", sätt count till 0
        else{
            count = 0;
        }
        //om count är högre än 0, byt textfärgen på countern till grön
        if (count > 0) {
            value.style.color = "green";
        }
        //om count är lägre än 0, byt textfärgen till röd
        if (count < 0) {
            value.style.color = "red"
        }
        //om count är 0, byt färg till svart
        if (count === 0) {
            value.style.color = "#222"
        }
        //gör så att texten på skärmen är count
        value.textContent = count;
    });
});