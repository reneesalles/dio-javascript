class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(value) {
        this._saldo = value;
    }

    sacar(value) {
        if (this.saldo < value)
            throw new Error("Saldo Insuficiente.");
        
        this.saldo -= value;
        return value;
    }

    depositar(value) {
        this.saldo += value;
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero, "conta corrente");
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(value) {
        this._cartaoCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, "conta poupança");
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, "conta universitária");
    }

    sacar(value) {
        if (value >= 500)
            throw new Error("Conta Universitária só é permitida sacar valores menores que R$500,00.");

        return super.sacar(value);
    }
}

const contasAbertas = [
    new ContaCorrente(1, 222, true),
    new ContaPoupanca(2, 31),
    new ContaUniversitaria(3, 412)
];

for (let conta of contasAbertas) {
    try {
        console.log(conta);
        console.log("depositar", conta.depositar(500));
        console.log("sacar", conta.sacar(500));
        console.log("sacar", conta.sacar(100));
    } catch (error) {
        console.error(error.message);
    }
}