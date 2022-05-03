# DIO - Javascript - Orientação a Objetos

Repositório contendo a atividade prática do curso "Orientação a Objetos" da DIO

## Atividade: Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Crie a classe <code>ContaBancaria</code>, que possui os parâmetros <code>agencia</code>, <code>numero</code>, <code>tipo</code> e <code>saldo</code>;
2. Dentro de <code>ContaBancaria</code>, construa o **getter e o setter** de <code>saldo</code>;
3. Dentro de <code>ContaBancaria</code>, crie os métodos <code>sacar</code> e <code>depositar</code>;
4. Crie uma classe-filha chamada <code>ContaCorrente</code> que herda todos esses parâmetros e ainda possua o parâmetro <code>cartaoCredito</code>;
5. Ainda em <code>ContaCorrente</code>, construa o **getter e o setter** de <code>cartaoCredito</code>;
6. Ainda em <code>ContaCorrente</code>, faça com que o <code>tipo</code> seja <code>'conta corrente'</code> por padrão;
7. Crie uma classe-filha chamada <code>ContaPoupanca</code> que herda todos os parâmetros de <code>ContaBancaria</code>;
8. Crie uma classe-filha chamada <code>ContaUniversitaria</code> que herda todos os parâmetros de <code>ContaBancaria</code>;
9. Faça com que o método saque de <code>ContaUniversitaria</code> apenas seja capaz de sacar valores **menores que 500 reais**.