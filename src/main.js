// const inputs = document.querySelectorAll("input");
// const btnGame = document.querySelector("#gameCheck");

// const sequencias = {
//   sequencia1: [7, 14, 21, 32, 45, 59],
//   sequencia2: [10, 16, 22, 38, 51, 56],
//   sequencia3: [10, 13, 15, 31, 32, 37],
//   sequencia4: [5, 13, 31, 35, 38, 60],
//   sequencia5: [15, 24, 28, 46, 51, 52],
//   sequencia6: [7, 16, 33, 46, 58, 60],
//   sequencia7: [12, 19, 31, 42, 52, 54],
//   sequencia8: [19, 25, 33, 37, 44, 56],
//   sequencia9: [11, 20, 24, 46, 53, 60],
//   sequencia10: [7, 18, 22, 33, 38, 55],
//   sequencia11: [23, 28, 30, 35, 48, 55],
//   sequencia12: [11, 26, 32, 45, 51, 59],
//   sequencia13: [5, 10, 27, 34, 44, 53],
//   sequencia14: [2, 10, 13, 37, 44, 58],
//   sequencia15: [4, 20, 23, 35, 39, 57],
//   sequencia16: [12, 32, 38, 44, 47, 53],
//   sequencia17: [10, 17, 23, 37, 46, 52],
//   sequencia18: [24, 28, 33, 40, 41, 54],
//   sequencia19: [1, 5, 18, 46, 53, 59],
//   sequencia20: [6, 9, 13, 20, 52, 59],
//   sequencia21: [3, 10, 27, 44, 58, 60],
//   sequencia22: [3, 10, 21, 28, 33, 55],
//   sequencia23: [12, 18, 25, 31, 39, 42],
//   sequencia24: [7, 11, 13, 20, 31, 52],
//   sequencia25: [3, 16, 29, 36, 42, 58],
//   sequencia26: [10, 25, 34, 38, 40, 42],
//   sequencia27: [1, 6, 19, 23, 37, 51],
//   sequencia28: [5, 10, 17, 34, 42, 56],
//   sequencia29: [3, 7, 15, 29, 36, 60],
//   sequencia30: [2, 8, 14, 27, 35, 59],
// };

// function checkBase(){
//   const sequenciaInserida = Array.from(inputs.map(input => parseInt(input.value, 10)))

//   function sequenciaVencedora(sequencia){
//     if(sequencia.length !== 6){ return false}

//     for(let i = 0; i < 6; i++){
//       if(sequencia[i] !== sequenciaInserida[i]) { return false}
//     }

//     return true
//   }

//   for( const key in sequencias ){
//     if(sequencias.hasOwnProperty(key)){
//       const sequenciaAtual = sequencias[key]

//       if(sequenciaVencedora(sequenciaAtual)){
//         alert(`jogo vencedor ${key}`)
//       }
//     }
//   }
// } 
// btnGame.onclick = checkBase

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");
  const btnGame = document.getElementById("gameCheck");
  const form = document.getElementById("form");
  const resetButton = document.querySelector('.reset')

  const sequencias = {
    sequencia1: [7, 14, 21, 32, 45, 59],
    sequencia2: [10, 16, 22, 38, 51, 56],
    sequencia3: [10, 13, 15, 31, 32, 37],
    sequencia4: [5, 13, 31, 35, 38, 60],
    sequencia5: [15, 24, 28, 46, 51, 52],
    sequencia6: [7, 16, 33, 46, 58, 60],
    sequencia7: [12, 19, 31, 42, 52, 54],
    sequencia8: [19, 25, 33, 37, 44, 56],
    sequencia9: [11, 20, 24, 46, 53, 60],
    sequencia10: [7, 18, 22, 33, 38, 55],
    sequencia11: [23, 28, 30, 35, 48, 55],
    sequencia12: [11, 26, 32, 45, 51, 59],
    sequencia13: [5, 10, 27, 34, 44, 53],
    sequencia14: [2, 10, 13, 37, 44, 58],
    sequencia15: [4, 20, 23, 35, 39, 57],
    sequencia16: [12, 32, 38, 44, 47, 53],
    sequencia17: [10, 17, 23, 37, 46, 52],
    sequencia18: [24, 28, 33, 40, 41, 54],
    sequencia19: [1, 5, 18, 46, 53, 59],
    sequencia20: [6, 9, 13, 20, 52, 59],
    sequencia21: [3, 10, 27, 44, 58, 60],
    sequencia22: [3, 10, 21, 28, 33, 55],
    sequencia23: [12, 18, 25, 31, 39, 42],
    sequencia24: [7, 11, 13, 20, 31, 52],
    sequencia25: [3, 16, 29, 36, 42, 58],
    sequencia26: [10, 25, 34, 38, 40, 42],
    sequencia27: [1, 6, 19, 23, 37, 51],
    sequencia28: [5, 10, 17, 34, 42, 56],
    sequencia29: [3, 7, 15, 29, 36, 60],
    sequencia30: [2, 8, 14, 27, 35, 59],
  };

  function checkBase() {
    const sequenciaInserida = Array.from(inputs).map((input) =>
      parseInt(input.value, 10)
    );

    function sequenciaVencedora(sequencia) {
      if (sequencia.length !== 6) {
        return false;
      }

      for (let i = 0; i < 6; i++) {
        if (sequencia[i] !== sequenciaInserida[i]) {
          return false;
        }
      }

      return true;
    }

    for (const key in sequencias) {
      if (sequencias.hasOwnProperty(key)) {
        const sequenciaAtual = sequencias[key];

        if (sequenciaVencedora(sequenciaAtual)) {
          displayResultado(`${sequencias[key]}`);
          return; // Retorna para evitar exibir mais de um resultado
        }
      }
    }

    displayResultado("Nenhum jogo vencedor encontrado.");
  }

  function displayResultado(mensagem) {
    // Criar elemento de parágrafo para exibir a mensagem
    const containerResult = document.querySelector('.result')
    containerResult.classList.add('show')
    const resultadoParagrafo = document.querySelector(".result-show");
    resultadoParagrafo.textContent = mensagem;

    const closeBtn = document.querySelector('.close')
    closeBtn.addEventListener('click', ()=>{
      if(containerResult.classList.contains('show')){
        containerResult.classList.remove('show')
      }
    })
    
  }

  // Adicionando evento de clique para o botão
  btnGame.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar o envio do formulário
    checkBase();
  });

  // Adicionando evento de clique para o botão de reset
  resetButton.addEventListener("reset", function () {
    // Limpar mensagens de resultado ao limpar o formulário
    const resultadoParagrafo = document.querySelector("p");
    if (resultadoParagrafo) {
      resultadoParagrafo.remove();
    }
  });
});
