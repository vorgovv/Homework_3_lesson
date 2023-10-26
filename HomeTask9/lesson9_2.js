function divideNumber(n) {
    let num = 0;
    while (n >= 14) {
        n /= 2;
        num++;
    }
    return { result: n, iterations: num };
}

const resultNumber = divideNumber(40);
console.log(`Получается число: ${resultNumber.result}`);
console.log(`Количество итераций: ${resultNumber.iterations}`);