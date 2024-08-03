function findMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
}

const inputArray = [5, 2, 7, 1, 9];
const result = findMinMax(inputArray);
console.log(result); // { min: 1, max: 9 }


// In this function:

// We use the spread operator (...arr) to pass the array elements as individual arguments to Math.min() and Math.max().
// The resulting object result contains the minimum and maximum values.