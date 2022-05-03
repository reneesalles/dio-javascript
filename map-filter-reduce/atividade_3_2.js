const _precos = [10, 11.51, 13.55, 2.1, 5];
const _saldoInicial = 50;

/**
 * Calcular saldo final à partir de uma lista de preços e um saldo disponível
 * @param {number[]} precos 
 * @param {number} saldo 
 * @returns {number}
 */
function calcularSaldoFinal(precos, saldo) {
    return precos.reduce(
        (prev, curr) => prev - curr,
        saldo);
}

console.log("Lista de preços", _precos);
console.log("Saldo Inicial", _saldoInicial);
console.log("Saldo Final", calcularSaldoFinal(_precos, _saldoInicial));