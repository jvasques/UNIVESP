/*

ATIVIDADE: Semana 2 - Fórum Temático - Algoritmo para calcular o imposto de renda 
DESCRIÇÃO: No desafio da semana, você deveria pensar a elaboração de um algoritmo para calcular o imposto de renda de um contribuinte a partir de seu salário bruto e do número de seus dependentes. 
Compartilhe aqui no fórum o resultado a que você chegou e compare com outros algoritmos encontrados.

ALUNO: JOÃO PAULO DE OLIVEIRA VASQUES DOS SANTOS
CURSO: TECNOLOGIA DA INFORMAÇÃO
BIMESTE: 1
DISCIPLINA: PENSAMENTO COMPUTACIONAL
DOCENTE: PROF. DR. RONALDO CELSO MESSIAS CORREIA
INSTITUIÇÃO: UNIVESP - UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO
DATA: 10/08/2023

*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o seu salário mensal: R$ ", function (salario) {
  salario = parseFloat(salario);
  rl.question("Digite o número de dependentes: ", function (dependentes) {
    dependentes = parseInt(dependentes);
    rl.question(
      "Pensão e outras deduções (sujeito a comprovação): R$ ",
      function (outros) {
        outros = parseInt(outros);

        const deducao = dependentes * 189.59 + outros;
        let aliquota = 0;
        let parcela = 0;
        let salarioCalculado = 0;

        if (deducao > 0) {
          salarioCalculado = salario - deducao;
        } else {
          salarioCalculado = salario;
        }

        if (salarioCalculado < 1903.98) {
          aliquota = 0;
          parcela = 0;
        } else if (salarioCalculado >= 1903.99 && salarioCalculado <= 2826.65) {
          aliquota = 0.075;
          parcela = 142.8;
        } else if (salarioCalculado >= 2826.66 && salarioCalculado <= 3751.05) {
          aliquota = 0.15;
          parcela = 354.8;
        } else if (salarioCalculado >= 3751.06 && salarioCalculado <= 4664.68) {
          aliquota = 0.225;
          parcela = 636.13;
        } else if (salarioCalculado > 4664.68) {
          aliquota = 0.275;
          parcela = 869.36;
        }

        const imposto = salarioCalculado * aliquota - parcela;
        if (imposto > 0) {
          console.log(
            `O valor do imposto de renda é: R$ ${imposto.toFixed(2)}`
          );
        } else {
          console.log("Você está isento de imposto de renda");
        }

        rl.close();
      }
    );
  });
});
