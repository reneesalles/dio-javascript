const _array = [1, 2, 3, 4, 5];

/**
 * Somar todos os números de um array usando reduce
 * @param {number[]} array 
 * @returns {number}
 */
function somarArray(array) {
    return array.reduce((prev, curr) => prev + curr);
}

console.log("Array Inicial", _array);
console.log("Reduce", somarArray(_array));