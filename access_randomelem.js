function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
}

const inputArray = [1, 2, 3, 4, 5];
const result = extractElements(inputArray);
console.log(result); // [1, 2, 5]