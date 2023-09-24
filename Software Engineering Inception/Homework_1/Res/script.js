let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(displayValue);
        if (result === undefined || isNaN(result)) {
            throw new Error("Invalid Input");
        }
        displayValue = result.toString();
        document.getElementById('display').value = result;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        let number = parseFloat(displayValue);
        if (isNaN(number)) {
            throw new Error("Invalid Input");
        }
        let result = Math.sqrt(number);
        displayValue = result.toString();
        document.getElementById('display').value = result;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = 'Error';
    }
}

function calculateExponential() {
    try {
        let number = parseFloat(displayValue);
        if (isNaN(number)) {
            throw new Error("Invalid Input");
        }
        let result = Math.exp(number);
        displayValue = result.toString();
        document.getElementById('display').value = result;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = 'Error';
    }
}

function calculateNaturalLog() {
    try {
        let number = parseFloat(displayValue);
        if (isNaN(number) || number <= 0) {
            throw new Error("Invalid Input");
        }
        let result = Math.log(number);
        displayValue = result.toString();
        document.getElementById('display').value = result;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = 'Error';
    }
}

function calculateLog() {
    try {
        let number = parseFloat(displayValue);
        if (isNaN(number) || number <= 0) {
            throw new Error("Invalid Input");
        }
        let result = Math.log10(number);
        displayValue = result.toString();
        document.getElementById('display').value = result;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = 'Error';
    }
}
