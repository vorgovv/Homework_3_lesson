const arrayToSort = [43, 344, 11, 2, 1, 320, 390];

function sortArray(arr, ascending = true) {
  return arr.sort((a, b) => ascending ? a - b : b - a);
}

console.log(sortArray(arrayToSort, true), `- Сортировка массива по возрастанию`);
console.log(sortArray(arrayToSort, false), `- Сортировка массива по убыванию`);