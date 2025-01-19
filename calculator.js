
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = number1 + number2;
    const displayResult =  document.getElementById('calculation-result').textContent = result;
    return displayResult;
}); 
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = number1 - number2;
    const displayResult =  document.getElementById('calculation-result').textContent = result;
    return displayResult;
}); 
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = number1 * number2;
    const displayResult =  document.getElementById('calculation-result').textContent = result;
    return displayResult;
}); 
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = number1 / number2;
    const displayResult =  document.getElementById('calculation-result').textContent = result;
    return displayResult;
}); 
