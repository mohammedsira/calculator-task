let outputScreen = document.getElementById("result");
function display(number) {
    outputScreen.value += number;
}
function calculate() {
    try {
        const finalResult = eval(outputScreen.value);
        outputScreen.value = finalResult;
    } catch {
        alert("Invalid Expression");
    }
}
function clearAll() {
    outputScreen.value = "";
}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/^[0-9]$/.test(key)) {
        display(key);
    } else if (key == '+' || key == '-' || key == '*' || key == '/' || key == '%' || key == '.') {
        display(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'Delete') {
        clearAll();
    } else if (key === 'Backspace') {
        del();
    } else {
        alert('Only numbers are allowed');
    }
})