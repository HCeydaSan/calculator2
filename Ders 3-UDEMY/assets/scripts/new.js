//default olarak değer tanımladık
const defaultResult = 0;
let currentResult = defaultResult;


//yazılan string number'ı, number'a dönüştürür ve yazılan değeri döndürür
function getUserNumberInput() {
    return Number(userInput.value);
}


//operatör, hesaplama öncesi sonuç, kullanılan sayı
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}


function calculateResult(calculationType) {
    if (
        calculationType === 'ADD' ||
        calculationType === 'SUBTRACT' ||
        calculationType === 'MULTIPLY' ||
        calculationType === 'DIVIDE'
    ) {
        const enteredNumber = getUserNumberInput();
        const initialResult = currentResult;
        let mathOperator;
        if (calculationType === 'ADD') {
            currentResult += enteredNumber;
            mathOperator = '+';
        } else if (calculationType === 'SUBTRACT') {
            currentResult -= enteredNumber;
            mathOperator = '-';
        } else if (calculationType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathOperator = '*';
        } else if (calculationType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathOperator = '/';
        }

        createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    } else {
        return;
    }
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
