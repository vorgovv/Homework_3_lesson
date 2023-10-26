 function getNum(delay, min, max) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(randomNum);
      }, delay);
    });
  }
  
  async function sumNums() {
    const num1 = await getNum(3000, 1, 5);
    const num2 = await getNum(5000, 6, 10);
    const sum = num1 + num2;
    console.log('Сгенерированные числа:', num1, num2);
    console.log('Сумма сгенерированных чисел:', sum);
  }
  
  sumNums();