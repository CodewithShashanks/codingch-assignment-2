function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

const x = 5;
const y = 10;
const swappedValues = swapValues(x, y);
console.log(swappedValues); // [10, 5]
