 function getNum() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 5) + 1;
        resolve(randomNum);
      }, 3000);
    });
  }
  
  async function squareResult() {
    const num = await getNum();
    const squaredNum = num * num;
    console.log('Сгенерированное число:', num, 'Квадрат числа:', squaredNum);
  }
  
  squareResult();