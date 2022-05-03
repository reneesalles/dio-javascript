/**
 * Pega apenas os valores únicos de um array de int
 * @param {int[]} array 
 * @return {int[]}
 */
function getUniques(array) {
    let set = new Set(array);
    // let result = [];
    // for (let val of set) {
    //     result.push(val);
    // }
    // return result;
    return [...set]; //ou usar o spread operator ...
}

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(getUniques(array));