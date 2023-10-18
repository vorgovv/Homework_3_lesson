 // 1. поменять массив в обратном порядке
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // 2. найти максимальное значение числа в массиве
  function findMaxValue(arr) {
    return Math.max(...arr);
  }
  
  // 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
  function generateFibonacci(N, M) {
    if (N < 0 || M <= 0) {
      return [];
    }
  
    const fibonacci = [0, 1];
    while (fibonacci.length < N + M) {
      const nextValue = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(nextValue);
    }
  
    return Object.values(fibonacci.slice(N, N + M));
  }
  
  // 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению
  function findMatchingDigits(number1, number2) {
    if (number1.length !== 4 || number2.length !== 4) {
      throw new Error("Числа должны быть 4-х значными.");
    }
  
    let matchingValueAndPosition = 0;
    let matchingValue = 0;
  
    for (let i = 0; i < 4; i++) {
      if (number1[i] === number2[i]) {
        matchingValueAndPosition++;
      } else if (number2.includes(number1[i])) {
        matchingValue++;
      }
    }
  
    return {
      matchingValueAndPosition,
      matchingValue,
    };
  }
  
  // 5. сортировка массива по возрастанию/убыванию
  function sortArray(arr, ascending = true) {
    return arr.sort((a, b) => ascending ? a - b : b - a);
  }
  
  // 6. удалить из массива все повторяющиеся элементы
  function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  const array1 = [1, 2, 3, 4, 5];
  console.log(reverseArray(array1));
  
  const array2 = [10, 5, 20, 8, 15];
  console.log(findMaxValue(array2));
  
  const N = 5;
  const M = 10;
  console.log(generateFibonacci(N, M));
  
  const number1 = "1943";
  const number2 = "1394";
  const matchingDigits = findMatchingDigits(number1, number2);
  console.log(`Совпадения по значению и позиции: ${matchingDigits.matchingValueAndPosition}`);
  console.log(`Совпадения только по значению: ${matchingDigits.matchingValue}`);
  
  const array3 = [4, 2, 8, 1, 6];
  console.log(sortArray(array3, true)); // По возрастанию
  console.log(sortArray(array3, false)); // По убыванию
  
  const array4 = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(array4));