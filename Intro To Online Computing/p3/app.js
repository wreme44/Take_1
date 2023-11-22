function calculateStatistics() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const numbers = [num1, num2, num3].sort((a, b) => a - b);

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const mean = (num1 + num2 + num3) / 3;
    const median = numbers[1];
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
