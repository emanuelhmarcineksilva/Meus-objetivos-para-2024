const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Laço de repetição //
// A baixo temos a váriavel "let" que tem o nome de "i" que é igua a "0" //
// O código "length" é a quantidade total do que esta antes, ou seja o "botoes" //
// O código "i++" faz acrecentar mais 1 ao valor do "i" //
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let apaga = 0; apaga < botoes.length; apaga++) {
      botoes[apaga].classList.remove("ativo");
      textos[apaga].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

const contadores = document.querySelectorAll(".contador");
// O código "Date()" pemite qeu você coloque uma data dentro. Ao declarar parâmetros vazios (), o código selecionará o tempo local do seu computador. Porém de uma fora estranha //
const tempoObjetivo1 = new Date("2024-04-10T00:10:40");
const tempoObjetivo2 = new Date("2025-02-01T00:23:20");
const tempoObjetivo3 = new Date("2024-12-30T00:04:10");
const tempoObjetivo4 = new Date("2025-03-20T00:12:05");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calcularTempo(tempoObjetivo) {
  // O código "Date()" está retornando o tempo local do seu dispositivo, porém de uma forma dificil de compreender//
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  // O código "Math.floor(397.4723852)" arredeonda o numero dentro dos parenteses. Ex: 397 //
  // Math.ceil(), Math.floor() e Math.round() são funções matemáticas em JavaScript que são usadas para arredondar números para cima, para baixo ou para o valor mais próximo, respectivamente. //
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  // O código abaixo "%=60" pega o resto da divisão, porém em um número dentro de 60 que foi o limite escolhido //
  // Basicamente o código cria um limite que zera se for ultrapassado //
  // Aqui, estamos pegando o valor da variável segundos e aplicando o operador %= para fazer a operação de módulo com 60. Isso significa que estamos dividindo o valor de segundos por 60 e atribuindo o restante da divisão novamente à variável segundos. Isso é feito para garantir que os segundos não ultrapassem 60, ou seja, se o valor de segundos fosse, por exemplo, 75, após essa operação, ele seria ajustado para 15, pois 75 dividido por 60 resulta em 1 com restante 15.//
  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  if (tempoFinal > 0) {
    return [dias,horas,minutos,segundos];
  } else {
    return [0,0,0,0];
  }
}

function atualizaCronometro() {
  
  //for (let i=0; i<contadores.length; i++) {: Inicia um loop que vai de 0 até o tamanho da lista de elementos contadores. A variável i é usada como contador do loop. //
  for (let i = 0; i < contadores.length; i++) {
    //O índice "0" dentro dos parênteses indica a primeira posição da lista tempos;
    //O índice “0” fora dos parênteses indica a posição do return na função calculaTempo().
    document.getElementById("dias"+i).textContent = calcularTempo(tempos[i])[0];
    document.getElementById("horas"+i).textContent = calcularTempo(tempos[i])[1];
    document.getElementById("min"+i).textContent = calcularTempo(tempos[i])[2];
    document.getElementById("seg"+i).textContent = calcularTempo(tempos[i])[3];
  //  // O código "textContent" permite que você escreva no html através do java //
  //  // Na subtração do tempo ate o objetivo menos o atual mostra o quento tempo falta //
  //  contadores[i].textContent = calcularTempo(tempos[i]);
  }
}

function comecaCronometro() {
  atualizaCronometro();
  // O código "setInterval" atualiza uma função de a cordo com o tempo que voce escolher em milesimos //
  // Não chame a função com os parenteses pois só estamos chamando //
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();

// A alguns códigos para tempo: //
// O "getTime()" retorna o tempo em milisegundos //
// O "getDate()" retorna o dia do mês, em números interios de 1 a 31 //
// O "getMonth()" Retorna o mês atual, considerando que janeiro inicia em 0 e dezembro termina em 11 //
// O "getFullYear()" Retorna o ano atual //

// Como usar o "for" //
for ([inicialização]; [condição]; [incremento]) {
  declaração;
}

// Exemplo de loop //

var frutas = ["Maçã", "Banana", "Laranja", "Pera"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Esse código mostra um pouco sobre como é feito para transformar de segundos para minutos e colocar o que sobrar de segundos nos segundos do cronômetro //
segundos = 130;
minutos = Math.floor(segundos / 60); // resultado esperado: 2 //
segundos %= 60; // resultados esperado : 10 //
// O operador "%" (de módulo) é uma ferramenta essencial em programação que ajuda a calcular restos, controlar repetições, verificar datas e horas, validar dados e fazer sorteios justos. É uma calculadora versátil para programadores. //

function geraCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = "rgb("+r+","+g+","+b+")";
    document.body.style.backgroundColor = rgb;
    
  }
  console.log("oi")
  setInterval(geraCorAleatoria, 1000);
  
