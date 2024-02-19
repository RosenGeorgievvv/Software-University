function subtract() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value

    let result = Number(firstNumber) - Number(secondNumber);
    let res = document.getElementById('result')
    res.textContent = result;
}
