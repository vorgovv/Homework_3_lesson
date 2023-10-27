function checkSumString(inputString) {

    const firstThreeDigits = inputString.slice(0, 3).split('').map(Number);
    const secondThreeDigits = inputString.slice(3, 6).split('').map(Number);

    const sumFirstThreeDigits = firstThreeDigits.reduce((a, b) => a + b, 0);
    const sumSecondThreeDigits = secondThreeDigits.reduce((a, b) => a + b, 0);

    return sumFirstThreeDigits === sumSecondThreeDigits ? 'Суммы равны' : 'Суммы не равны';
}

console.log(checkSumString('705507')); 
console.log(checkSumString('704507'));