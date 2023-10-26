function insertData(arr, index, data) {
    arr.splice(index, 0, ...data);
    return arr;
}

const firstArray = [34, 94, 11, 22, 903, 123];
const secondArray = ['a', 'b', 'c', 'd'];
const index = 2;

const newArray = insertData(firstArray, index, secondArray);
console.log(newArray);