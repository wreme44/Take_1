let inputCount = 0;

function addNumberInput() {
    if (inputCount < 10) {
        inputCount++;
        const inputGroup = document.getElementById('input-group');
        const inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.className = 'form-control';
        inputElement.placeholder = `Enter number ${inputCount}`;
        inputElement.id = `num${inputCount}`;
        inputGroup.appendChild(inputElement);
    }
}

function calculateStatistics() {
    const numbers = [];
    for (let i = 1; i <= inputCount; i++) {
        const num = parseFloat(document.getElementById(`num${i}`).value);
        if (!isNaN(num)) {
            numbers.push(num);
        }
    }

    numbers.sort((a, b) => a - b);

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const median = numbers.length % 2 === 0 ? (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2 : numbers[Math.floor(numbers.length / 2)];
    const range = max - min;

    document.getElementById('results').innerHTML = `
        <h3>Results:</h3>
        <p>Max: ${max}</p>
        <p>Min: ${min}</p>
        <p>Mean: ${mean.toFixed(2)}</p>
        <p>Median: ${median}</p>
        <p>Range: ${range}</p>
    `;
}

// Initial three number inputs
for (let i = 0; i < 3; i++) {
    addNumberInput();
}
