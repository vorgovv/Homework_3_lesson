function calcAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const average = sum / arr.length;
    return average;
}

const arr = [4324, 125, 20, 0, 1, 666];
console.log(`Среднее арифметическое: ${calcAverage(arr)}`);