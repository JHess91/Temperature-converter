const celsiusInput = document.getElementById("celsius")
const fahrenheitInput = document.getElementById("fahrenheit")

const inputs = document.getElementsByClassName("input");


celsiusInput.oninput = () => {
    let output = (parseFloat(celsiusInput.value) * 9) / 5 +32;
    fahrenheitInput.value = parseFloat(output.toFixed(2));
}

fahrenheitInput.oninput = () => {
    let output = ((parseFloat(fahrenheitInput.value) - 32 ) * 5) / 9;
    celsiusInput.value = parseFloat(output.toFixed(2));
}