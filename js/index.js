let operationButtons = document.getElementsByClassName('operation-button');


function calculatorOperations(operator) {
    if (operator === '+') {
        alert(Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value));
    } else if (operator === "-") {
        alert(Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value));
    } else if (operator === "*") {
        alert(Number(document.getElementById("number1").value) * Number(document.getElementById("number2").value));
    } else if (operator === "/") {
        alert(Number(document.getElementById("number1").value) / Number(document.getElementById("number2").value))
    } else {
        alert("Unknown operator");
    }
}  

function onOperationButtonClick(eventObject) {
    calculatorOperations(eventObject.currentTarget.innerHTML);
}


for (let index = 0; index < operationButtons.length; index++) {
    operationButtons[index].addEventListener('click', onOperationButtonClick);
    
}
