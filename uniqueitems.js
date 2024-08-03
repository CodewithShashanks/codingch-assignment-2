function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const inputArray = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10, 10];
const uniqueArray = removeDuplicates(inputArray);
console.log(uniqueArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
