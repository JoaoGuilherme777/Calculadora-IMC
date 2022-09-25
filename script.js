const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome');
  const altura = document.getElementById('altura');
  const peso = document.getElementById('peso');
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorIMC < 18.5) {
      classificacao = 'abaixo do peso';
    } else if (valorIMC < 25) {
      classificacao = 'com peso ideal';
    } else if (valorIMC < 30) {
      classificacao = 'levemente acima do peso';
    } else {
      classificacao = 'com obesidade, cuidado!';
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
  } else {
    resultado.textContent = 'Prencha todos os campos!';
  }
}

calcular.addEventListener('click', imc);
