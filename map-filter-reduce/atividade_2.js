const _array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const obj = { resto: 0 };

/**
 * Gerar um segundo array usando o método filter com o parãmetro this
 * @param {int[]} array 
 * @param {obj} thisArg 
 * @returns {int[]}
 */
function filtraParesComThis(array, thisArg) {
    return array.filter(
        function (item) {
            return item % 2 == this.resto;
        },
        thisArg);
}

/**
 * Gerar um segundo array usando o método filter sem o parãmetro this
 * @param {int[]} array 
 * @returns {int[]}
 */
function filtraParesSemThis(array) {
    return array.filter(
        (item) => item % 2 == 0);
}

console.log("Array Inicial", _array);
console.log("Filter c/this", filtraParesComThis(_array, obj));
console.log("Filter s/this", filtraParesSemThis(_array));