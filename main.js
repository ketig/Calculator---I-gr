function addToDisplay(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    clearInput("display");
}
function clearAll() {
    clearDisplay();
    clearInput("displayResult");
}
function clearInput(id) {
    document.getElementById(id).value = "";
}
function leftDelete() {
    let displayValue = document.getElementById("display").value;
    let result = displayValue.substring(0, displayValue.length-1);
    document.getElementById("display").value = result;
}