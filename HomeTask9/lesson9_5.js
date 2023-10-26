function mixArrays(arr1, arr2) {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            result.push(arr1[i]);
        }
        if (i < arr2.length) {
            result.push(arr2[i]);
        }
    }

    return result;
}

const numbersArray = [32, 7, 10, 55, 1];
const letterArray = ['s', 'n', 'z', 'r', 'k'];
const mixedArray = mixArrays(numbersArray, letterArray);
console.log(mixedArray);