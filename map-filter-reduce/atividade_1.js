const _array = [1, 2, 3, 4, 5, 6];
const obj = { value: 2 };

/**
 * Gerar um segundo array usando o método map com o parãmetro this
 * @param {number[]} array Array de números
 * @param {obj} thisArg
 * @returns {number[]}
 */
function multiplicarComThis(array, thisArg) {
    return array.map(
        function (item) {
            return item * this.value;
        },
        thisArg);
}

/**
 * Gerar um segundo array usando o método map sem o parãmetro this
 * @param {number[]} array Array de números
 * @param {int} multiplier multiplicador
 * @returns {number[]}
 */
function multiplicarSemThis(array, multiplier) {
    return array.map(
        (item) => item * multiplier);
}

console.log("Array Inicial", _array);
console.log("Map c/this", multiplicarComThis(_array, obj));
console.log("Map s/this", multiplicarSemThis(_array, 3));