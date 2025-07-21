const textBox = document.getElementById("textBox");

const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");

result = document.getElementById("result");

let temp = 0;

function convert(){
    
    if (toFahrenheit.checked){
        temp = (textBox.value * 1.8) + 32;
        result.textContent = `${temp} °F `;
    }
    else if (toCelsius.checked){
        temp = (textBox.value - 32) / 1.8;
        result.textContent = `${temp} °C `;
    } 
    else {
        result.textContent = "select a unit";
    }
};