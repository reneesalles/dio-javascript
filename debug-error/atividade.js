/**
 * 
 * @param {[]} array 
 * @param {int} length 
 */
function isArrayOfSize(array, length) {
    try {
        if (!array || !length)
            throw new ReferenceError("Parâmetros array e length são obrigatórios");

        if (typeof (array) != "object")
            throw new TypeError("array precisa ser do tipo object");
        
        if (typeof (length) != "number")
            throw new TypeError("length precisa ser do tipo number");

        if (array.length != length)
            throw new RangeError("Tamanho do array deve ter o mesmo valor que length");

        return array;
    } catch (error) {
        if (error instanceof ReferenceError)
            console.error('Erro de Referência', error.message);
        else if (error instanceof TypeError)
            console.error('Erro de Tipo', error.message);
        else if (error instanceof RangeError)
            console.error('Erro de Range', error.message);
        else
            console.error('Erro Desconhecido', error);
    }
}

const _array = [1, 2, 3, 4, 5];

console.log(isArrayOfSize(_array, _array.length));
console.log(isArrayOfSize());
console.log(isArrayOfSize("_array", 1));
console.log(isArrayOfSize(_array, "1"));
console.log(isArrayOfSize(_array, 1));